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