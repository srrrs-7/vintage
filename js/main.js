document.addEventListener('DOMContentLoaded', () => {
  // ==========================================
  // 1. スクロール時のヘッダー制御
  // ==========================================
  const header = document.querySelector('header');
  const scrollThreshold = 50;

  const checkScroll = () => {
    if (window.scrollY > scrollThreshold) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', checkScroll);
  checkScroll(); // 初期読み込み時の判定

  // ==========================================
  // 2. モバイルメニュー (ハンバーガーメニュー)
  // ==========================================
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinksList = document.querySelectorAll('.nav-links li');

  if (burger && nav) {
    burger.addEventListener('click', () => {
      // メニューの開閉
      nav.classList.toggle('nav-active');

      // リンクのアニメーション
      navLinksList.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = '';
        } else {
          link.style.animation = `slideUpFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
      });

      // バーガーアニメーションのトグル
      burger.classList.toggle('toggle');
    });

    // リンクをクリックしたときにメニューを閉じる
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('nav-active');
        burger.classList.remove('toggle');
        navLinksList.forEach(l => l.style.animation = '');
      });
    });
  }

  // ==========================================
  // 3. ギャラリー拡大モーダル (Lightbox)
  // ==========================================
  const lightbox = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');
  const galleryItems = document.querySelectorAll('.gallery-item');

  if (lightbox && lightboxImg && lightboxClose) {
    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        const img = item.querySelector('.gallery-img');
        const title = item.querySelector('h3');
        const desc = item.querySelector('p');

        if (img) {
          lightboxImg.src = img.src;
          lightboxImg.alt = img.alt || 'Hair Studio Vintage Gallery';
          
          let captionText = title ? title.textContent : '';
          if (desc && desc.textContent) {
            captionText += ` - ${desc.textContent}`;
          }
          lightboxCaption.textContent = captionText;

          lightbox.classList.add('active');
          document.body.style.overflow = 'hidden'; // モーダル表示中はスクロール不可
        }
      });
    });

    const closeLightbox = () => {
      lightbox.classList.remove('active');
      document.body.style.overflow = ''; // スクロール復元
      setTimeout(() => {
        lightboxImg.src = '';
        lightboxCaption.textContent = '';
      }, 400); // フェードアウト後にクリア
    };

    lightboxClose.addEventListener('click', closeLightbox);

    // 背景をクリックした時も閉じる
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    // ESCキーで閉じる
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
      }
    });
  }

  // ==========================================
  // 4. スクロールフェードイン効果 (Intersection Observer)
  // ==========================================
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window && revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // 一度表示されたら監視を終了する（必要に応じて）
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.15, // 15%見えたらトリガー
      rootMargin: '0px 0px -50px 0px' // 画面下部から50px手前で検知
    });

    revealElements.forEach(element => {
      revealObserver.observe(element);
    });
  } else {
    // 互換性フォールバック（すぐに表示する）
    revealElements.forEach(element => {
      element.classList.add('active');
    });
  }
});
