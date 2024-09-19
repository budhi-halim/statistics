// Variables
let userOS = null;

// Logic
getOS();

if (userOS == null) {
    document.getElementById('os-detection').innerText = 'Invalid OS';
    addClass('os-detection', 'flickering-red-box');
    removeClass('os-detection', 'hidden');

    console.error('unable to get OS');
};

if (userOS == 'Windows' || userOS == 'MacOS') {
    document.getElementById('os-detection').innerText = `SPSS for ${userOS}`;
    
    function time(time) {
        return new Promise(function(resolve, reject) {
            setTimeout(resolve, time);
        });
    };

    async function animate() {
        try {
            addClass('os-detection', 'blue-box');
            addClass('os-detection', 'os-detection-appear');
            removeClass('os-detection', 'hidden');

            await time(1500);
            removeClass('os-detection', 'os-detection-appear');
            addClass('os-detection', 'os-detection-disappear');

            await time(500);
            addClass('os-detection', 'hidden');
        } finally {
            addClass(userOS.toLowerCase(), 'selected-os-appear')
            removeClass(userOS.toLowerCase(), 'hidden')
        };
    };

    animate();
} else {
    document.getElementById('os-detection').innerText = `${userOS} does not support SPSS. Please use Windows or MacOS devices.`;
    addClass('os-detection', 'flickering-red-box');
    removeClass('os-detection', 'hidden');
};

// Functions
function addClass(elementID, className) {
    document.getElementById(elementID).classList.add(className);
};

function removeClass(elementID, className) {
    document.getElementById(elementID).classList.remove(className);
};

function getOS() {
    const userAgent = window.navigator.userAgent || window.navigator.vendor || window.opera;
    const platform = window.navigator.platform;
    const macOSPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
    const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
    const iosPlatforms = ['iPhone', 'iPad', 'iPod'];

    if (/android/i.test(userAgent)) {
        userOS = 'Android';
    } else if (/samsung/i.test(userAgent) && /linux/i.test(userAgent)) {
        userOS = 'Android'; // For Samsung devices with 'Linux' in userAgent
    } else if (macOSPlatforms.includes(platform)) {
        userOS = 'MacOS';
    } else if (iosPlatforms.includes(platform) || (/Mac/i.test(userAgent) && 'ontouchend' in document)) {
        userOS = 'iOS';
    } else if (windowsPlatforms.includes(platform)) {
        userOS = 'Windows';
    } else if (/Linux/.test(platform)) {
        userOS = 'Linux';
    };
};