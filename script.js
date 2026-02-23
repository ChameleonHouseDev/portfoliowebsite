const translations = {
    'TH': {
        name: "ชยานันต์ เติมวัฒนพงศ์",
        nickLabel: "ชื่อเล่น:",
        nick: "วิน",
        eduTitle: "ประวัติการศึกษา",
        uni: "มหาวิทยาลัยกรุงเทพ",
        faculty: "คณะดิจิทัลมีเดียและศิลปะภาพยนตร์",
        major: "สาขาภาพยนตร์ เอกลำดับภาพ",
        minor: "โทการผลิตภาพกราฟิกเคลื่อนไหวและสื่อผสม",
        skillTitle: "ความสามารถ"
    },
    'EN': {
        name: "Chayanant Termwattanapong",
        nickLabel: "Nickname:",
        nick: "Win",
        eduTitle: "Education",
        uni: "Bangkok University",
        faculty: "Digital Media and Cinematic Arts",
        major: "Film Major in Film Editing",
        minor: "Minor in Motion Graphics and Mixed Media",
        skillTitle: "Skills"
    },
    'JP': {
        name: "チャヤーナント・タームワッタナポン",
        nickLabel: "ニックネーム:",
        nick: "ウィン",
        eduTitle: "学歴",
        uni: "バンコク大学",
        faculty: "デジタルメディア・映画芸術学部",
        major: "映画学科 編集専攻",
        minor: "モーショングラフィックス・ミックスメディア副専攻",
        skillTitle: "スキル"
    }
};

function toggleNested(event, id) {
    if (event) event.stopPropagation();
    const content = document.getElementById(id);
    const allNested = document.querySelectorAll('.nested-content');
    allNested.forEach(item => {
        if(item.id !== id) item.classList.remove('show');
    });
    content.classList.toggle('show');
}

function setTheme(theme, iconPath) {
    if (theme === 'dark') {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }
    const themeIcon = document.getElementById('current-theme-icon');
    if (themeIcon) themeIcon.src = iconPath;

    const desktopThemeIcon = document.querySelector('#main-btn .icon-desktop');
    if (desktopThemeIcon) desktopThemeIcon.src = iconPath;

    const themeOptions = document.querySelectorAll('#theme-list a[data-theme]');
    themeOptions.forEach(opt => {
        const value = opt.getAttribute('data-theme');
        opt.style.display = (value === theme) ? 'none' : 'block';
    });

    const themeList = document.getElementById('theme-list');
    if (themeList) themeList.classList.remove('show');
}

function setLang(iconPath, langCode) {
    const mobileLangIcon = document.getElementById('current-lang-icon-mobile');
    if (mobileLangIcon) mobileLangIcon.src = iconPath;
    const pcLangIcon = document.getElementById('current-lang-icon-pc');
    if (pcLangIcon) pcLangIcon.src = iconPath;
    const langBtn = document.getElementById('lang-btn');
    if (langBtn) langBtn.innerHTML = `<img src="${iconPath}" class="flag-icon">`;
    const l = translations[langCode];
    if (l) {
        document.getElementById('txt-name').innerText = l.name;
        document.getElementById('txt-nickname-label').innerText = l.nickLabel;
        document.getElementById('txt-nickname').innerText = l.nick;
        document.getElementById('txt-edu-title').innerText = l.eduTitle;
        document.getElementById('txt-university').innerText = l.uni;
        document.getElementById('txt-faculty').innerText = l.faculty;
        document.getElementById('txt-major').innerText = l.major;
        document.getElementById('txt-minor').innerText = l.minor;
        document.getElementById('txt-skill-title').innerText = l.skillTitle;
    }
    const langOptions = document.querySelectorAll('#lang-list a[data-lang], .dropdown-lang-desktop .dropdown-content a[data-lang]');
    langOptions.forEach(opt => {
        const code = opt.getAttribute('data-lang');
        opt.style.display = (code === langCode) ? 'none' : 'block';
    });

    const langList = document.getElementById('lang-list');
    if (langList) langList.classList.remove('show');
}

let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');
let isHoveringDropdown = false;

document.querySelectorAll('.dropdown').forEach(drop => {
    drop.addEventListener('mouseenter', () => isHoveringDropdown = true);
    drop.addEventListener('mouseleave', () => isHoveringDropdown = false);
});

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (!isHoveringDropdown) {
        if (scrollTop > lastScrollTop && scrollTop > 70) {
            navbar.classList.add('nav-hidden');
        } else {
            navbar.classList.remove('nav-hidden');
        }
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}, false);

document.addEventListener('mousemove', function(e) {
    if (e.clientY < 60) {
        navbar.classList.remove('nav-hidden');
    }
});

function toggleWorks(event) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }
    const item = document.querySelector('.nav-item.has-sub');
    if (!item) return;
    const isOpen = item.classList.contains('open');

    document.querySelectorAll('.nav-item.has-sub').forEach(el => el.classList.remove('open'));

    if (!isOpen) {
        item.classList.add('open');
    }
}

document.addEventListener('click', () => {
    document.querySelectorAll('.nav-item.has-sub').forEach(el => el.classList.remove('open'));
});

document.addEventListener('DOMContentLoaded', () => {
    setTheme('light', 'src/theme/sun.png');
    setLang('src/flag/thai.png', 'TH');
});