
document.addEventListener('DOMContentLoaded', function() {

    const slideInterval = 4000;
    const images = document.querySelectorAll('.slideshow-container .slide-image');

    if (images.length > 0) {
        let currentIndex = 0;
        function showNextImage() {
            images[currentIndex].classList.remove('is-active');
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add('is-active');
        }
        setInterval(showNextImage, slideInterval);
        console.log('スライドショーのセットアップが完了しました。');
    } else {
        console.error('エラー: スライドショーの画像が見つかりませんでした。');
    }

    const newsData = [
      { date: "2025.07.31", category: "🔴", text: "2025年度オープンキャンパス（来場型）について", url: "https://www.sus.ac.jp/topics/20250731-2/" },
      { date: "2025.07.19", category: "🔷", text: "ドイツとの交流の深化...ドイツのパートナー大学THWS訪問、両大学学長会談、最初の学生交換も開始ー", url: "https://www.sus.ac.jp/topics/20250719-1/" },
      { date: "2025.07.05", category: "🔲", text: "本学教員がIEEE ICCBE2025 Best Conference PaperAwardを受賞しました", url: "https://www.sus.ac.jp/topics/20250717-1/" }
    ];

    const newsListElement = document.querySelector('.news ul');
    
    if (newsListElement) {
        newsListElement.innerHTML = ''; 
        newsData.forEach(item => {
          const li = document.createElement('li');
          const a = document.createElement('a');
          a.href = item.url;
          a.innerHTML = `${item.date}<span>　　${item.category}　　</span>${item.text}`;
          li.appendChild(a);
          newsListElement.appendChild(li);
        });
        console.log('ニュースリストの生成が完了しました。');
    } else {
        console.error('エラー: ニュースリストを表示するul要素（.news ul）が見つかりません。');
    }
    const backToTopButton = document.getElementById('back-to-top');

    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });

        backToTopButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

});