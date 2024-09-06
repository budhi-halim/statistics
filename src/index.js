// Elements
const osSelectionPrompt = document.getElementById('os-selection');
const windowsButton = document.getElementById('windows-selected');
const macOSButton = document.getElementById('mac-os-selected');
const windowsContent = document.getElementById('windows');
const macOSContent = document.getElementById('mac-os');

// Event Listeners
windowsButton.addEventListener('click', () => {
    osSelectionPrompt.remove();
    windowsContent.removeAttribute('hidden');
});

macOSButton.addEventListener('click', () => {
    osSelectionPrompt.remove();
    macOSContent.removeAttribute('hidden');
});

// OS Detection
let userOS = null;
const userAgent = window.navigator.userAgent;
const platform = window.navigator?.userAgentData?.platform || window.navigator.platform;
const macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"];
const windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"];
const iosPlatforms = ["iPhone", "iPad", "iPod"];

if (macosPlatforms.indexOf(platform) !== -1) {
    userOS = "Mac OS";
} else if (iosPlatforms.indexOf(platform) !== -1) {
    userOS = "iOS";
} else if (windowsPlatforms.indexOf(platform) !== -1) {
    userOS = "Windows";
} else if (/Android/.test(userAgent)) {
    userOS = "Android";
} else if (/Linux/.test(platform)) {
    userOS = "Linux";
}

document.getElementById('user-os').innerText += ' ' + userOS;
if (userOS == 'iOS' || userOS == 'Android' || userOS == 'Linux') document.getElementById('incompatible').removeAttribute('hidden');