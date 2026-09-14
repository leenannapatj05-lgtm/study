// ui.js
// จัดการลูกเล่นและ Interactive UI ของหน้าเว็บ

const UI = {
    // 1. จัดการ Popup (Modal)
    openModal: (modalId) => {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            // Allow clicking outside to close
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    UI.closeModal(modalId);
                }
            }, { once: true });
        }
    },
    
    closeModal: (modalId) => {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }
    },

    // 2. จัดการ Tabs (แท็บเปลี่ยนหน้าต่าง)
    switchTab: (tabId, groupClass = 'tab-content') => {
        // Hide all contents in the group
        const contents = document.querySelectorAll('.' + groupClass);
        contents.forEach(content => {
            content.classList.add('hidden');
        });
        
        // Show the target content
        const target = document.getElementById(tabId);
        if (target) {
            target.classList.remove('hidden');
        }
    },

    // 3. จัดการ Toggle Switch
    toggleSwitch: (buttonElement) => {
        // Assume buttonElement is a div/button containing the switch circle
        const circle = buttonElement.querySelector('div');
        const isActive = buttonElement.classList.contains('bg-primary');
        
        if (isActive) {
            buttonElement.classList.remove('bg-primary');
            buttonElement.classList.add('bg-outline-variant');
            if (circle) circle.classList.replace('translate-x-5', 'translate-x-1');
        } else {
            buttonElement.classList.remove('bg-outline-variant');
            buttonElement.classList.add('bg-primary');
            if (circle) circle.classList.replace('translate-x-1', 'translate-x-5');
        }
    }
};

// นำ UI object ไปไว้ที่ window เพื่อให้ปุ่มเรียกใช้ผ่าน onclick ได้
window.StudySyncUI = UI;
