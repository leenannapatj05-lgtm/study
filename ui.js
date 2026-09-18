// ui.js - Modern Interactive UI & Notification System for StudySync

const UI = {
    // 1. จัดการ Modal ทั่วไป
    openModal: (modalId) => {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('hidden');
            modal.classList.add('flex');
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
        const contents = document.querySelectorAll('.' + groupClass);
        contents.forEach(content => {
            content.classList.add('hidden');
        });
        
        const target = document.getElementById(tabId);
        if (target) {
            target.classList.remove('hidden');
        }
    },

    // 3. จัดการ Toggle Switch
    toggleSwitch: (buttonElement) => {
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
    },

    // 4. Modern Toast Notification System
    ensureToastContainer: () => {
        let container = document.getElementById('studysync-toast-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'studysync-toast-container';
            container.className = 'fixed top-5 right-5 z-[99999] flex flex-col gap-3 max-w-sm sm:max-w-md w-full px-4 pointer-events-none';
            document.body.appendChild(container);
            
            // Inject CSS styles if not yet injected
            if (!document.getElementById('studysync-ui-toast-css')) {
                const style = document.createElement('style');
                style.id = 'studysync-ui-toast-css';
                style.textContent = `
                    @keyframes toastSlideIn {
                        from { transform: translateX(50px) scale(0.92); opacity: 0; }
                        to { transform: translateX(0) scale(1); opacity: 1; }
                    }
                    @keyframes toastSlideOut {
                        from { transform: translateX(0) scale(1); opacity: 1; }
                        to { transform: translateX(60px) scale(0.9); opacity: 0; }
                    }
                    .toast-animate-in {
                        animation: toastSlideIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                    }
                    .toast-animate-out {
                        animation: toastSlideOut 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                    }
                `;
                document.head.appendChild(style);
            }
        }
        return container;
    },

    toast: (message, type = 'info', duration = 3800) => {
        const container = UI.ensureToastContainer();
        
        // Smart type detection if default
        if (type === 'info') {
            const lower = String(message).toLowerCase();
            if (lower.includes('เรียบร้อย') || lower.includes('สำเร็จ') || lower.includes('success')) {
                type = 'success';
            } else if (lower.includes('ผิดพลาด') || lower.includes('ล้มเหลว') || lower.includes('error')) {
                type = 'error';
            } else if (lower.includes('เตือน') || lower.includes('ต้อง') || lower.includes('ระวัง') || lower.includes('ยกเลิก')) {
                type = 'warning';
            }
        }

        const themes = {
            success: {
                bg: 'bg-emerald-50 dark:bg-emerald-950/90',
                border: 'border-emerald-300 dark:border-emerald-700',
                text: 'text-emerald-900 dark:text-emerald-100',
                iconColor: 'text-emerald-600 dark:text-emerald-400',
                iconBg: 'bg-emerald-100 dark:bg-emerald-900/60',
                icon: 'check_circle',
                bar: 'bg-emerald-500'
            },
            error: {
                bg: 'bg-rose-50 dark:bg-rose-950/90',
                border: 'border-rose-300 dark:border-rose-700',
                text: 'text-rose-900 dark:text-rose-100',
                iconColor: 'text-rose-600 dark:text-rose-400',
                iconBg: 'bg-rose-100 dark:bg-rose-900/60',
                icon: 'error',
                bar: 'bg-rose-500'
            },
            warning: {
                bg: 'bg-amber-50 dark:bg-amber-950/90',
                border: 'border-amber-300 dark:border-amber-700',
                text: 'text-amber-900 dark:text-amber-100',
                iconColor: 'text-amber-600 dark:text-amber-400',
                iconBg: 'bg-amber-100 dark:bg-amber-900/60',
                icon: 'warning',
                bar: 'bg-amber-500'
            },
            info: {
                bg: 'bg-indigo-50 dark:bg-indigo-950/90',
                border: 'border-indigo-300 dark:border-indigo-700',
                text: 'text-indigo-900 dark:text-indigo-100',
                iconColor: 'text-indigo-600 dark:text-indigo-400',
                iconBg: 'bg-indigo-100 dark:bg-indigo-900/60',
                icon: 'info',
                bar: 'bg-indigo-500'
            }
        };

        const theme = themes[type] || themes.info;

        const toastEl = document.createElement('div');
        toastEl.className = `pointer-events-auto relative overflow-hidden flex items-start gap-3.5 p-4 rounded-2xl border shadow-xl backdrop-blur-md transition-all duration-200 ${theme.bg} ${theme.border} ${theme.text} toast-animate-in`;
        
        // Format message with linebreaks
        const formattedMessage = String(message).replace(/\n/g, '<br>');

        toastEl.innerHTML = `
            <div class="flex-shrink-0 w-9 h-9 rounded-xl ${theme.iconBg} flex items-center justify-center ${theme.iconColor} shadow-sm mt-0.5">
                <span class="material-symbols-outlined text-[22px]">${theme.icon}</span>
            </div>
            <div class="flex-1 pt-0.5 min-w-0 pr-2">
                <div class="text-sm font-medium leading-relaxed break-words">${formattedMessage}</div>
            </div>
            <button class="flex-shrink-0 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 p-1 rounded-lg transition-colors cursor-pointer" title="ปิด">
                <span class="material-symbols-outlined text-[18px]">close</span>
            </button>
            <div class="absolute bottom-0 left-0 h-1 ${theme.bar} transition-all" style="width: 100%;"></div>
        `;

        const closeBtn = toastEl.querySelector('button');
        closeBtn.onclick = () => dismissToast(toastEl);

        container.appendChild(toastEl);

        // Animate progress bar
        requestAnimationFrame(() => {
            const bar = toastEl.querySelector('.absolute.bottom-0');
            if (bar) {
                bar.style.transition = `width ${duration}ms linear`;
                bar.style.width = '0%';
            }
        });

        // Auto dismiss timer
        let dismissTimeout = setTimeout(() => {
            dismissToast(toastEl);
        }, duration);

        // Pause on hover
        toastEl.addEventListener('mouseenter', () => {
            clearTimeout(dismissTimeout);
        });
        toastEl.addEventListener('mouseleave', () => {
            dismissTimeout = setTimeout(() => {
                dismissToast(toastEl);
            }, 1500);
        });

        function dismissToast(el) {
            if (!el || !el.parentNode) return;
            el.classList.remove('toast-animate-in');
            el.classList.add('toast-animate-out');
            setTimeout(() => {
                if (el.parentNode) el.parentNode.removeChild(el);
            }, 250);
        }
    },

    // 5. Sleek Confirm Modal Dialog
    confirm: (message, title = 'ยืนยันการทำรายการ') => {
        return new Promise((resolve) => {
            const overlay = document.createElement('div');
            overlay.className = 'fixed inset-0 z-[99998] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity duration-200';
            
            overlay.innerHTML = `
                <div class="bg-surface dark:bg-slate-900 border border-outline-variant/60 rounded-3xl p-6 max-w-sm w-full shadow-2xl scale-100 transition-transform">
                    <div class="flex items-center gap-3 mb-3">
                        <div class="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                            <span class="material-symbols-outlined">help</span>
                        </div>
                        <h3 class="font-title-md font-bold text-on-surface text-base sm:text-lg">${title}</h3>
                    </div>
                    <p class="text-on-surface-variant text-sm mb-6 leading-relaxed">${String(message).replace(/\n/g, '<br>')}</p>
                    <div class="flex justify-end gap-2.5">
                        <button id="studysync-confirm-cancel" class="px-4 py-2 rounded-xl text-on-surface-variant hover:bg-surface-container-high transition-colors font-medium text-sm cursor-pointer">
                            ยกเลิก
                        </button>
                        <button id="studysync-confirm-ok" class="px-5 py-2 rounded-xl bg-primary text-on-primary hover:bg-primary/90 transition-colors font-medium text-sm shadow-sm cursor-pointer">
                            ยืนยัน
                        </button>
                    </div>
                </div>
            `;

            document.body.appendChild(overlay);

            const cancelBtn = overlay.querySelector('#studysync-confirm-cancel');
            const okBtn = overlay.querySelector('#studysync-confirm-ok');

            const cleanup = (result) => {
                overlay.remove();
                resolve(result);
            };

            cancelBtn.onclick = () => cleanup(false);
            okBtn.onclick = () => cleanup(true);
            overlay.onclick = (e) => {
                if (e.target === overlay) cleanup(false);
            };
        });
    },

    // 6. Sleek Prompt Modal Dialog
    prompt: (message, defaultValue = '', title = 'ระบุข้อมูล') => {
        return new Promise((resolve) => {
            const overlay = document.createElement('div');
            overlay.className = 'fixed inset-0 z-[99998] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity duration-200';
            
            overlay.innerHTML = `
                <div class="bg-surface dark:bg-slate-900 border border-outline-variant/60 rounded-3xl p-6 max-w-sm w-full shadow-2xl scale-100 transition-transform">
                    <div class="flex items-center gap-3 mb-3">
                        <div class="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                            <span class="material-symbols-outlined">edit_square</span>
                        </div>
                        <h3 class="font-title-md font-bold text-on-surface text-base sm:text-lg">${title}</h3>
                    </div>
                    <p class="text-on-surface-variant text-sm mb-4 leading-relaxed">${String(message).replace(/\n/g, '<br>')}</p>
                    <input id="studysync-prompt-input" type="text" value="${defaultValue}" class="w-full px-4 py-2.5 rounded-xl border border-outline-variant bg-surface-container-lowest text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm mb-6 transition-all" />
                    <div class="flex justify-end gap-2.5">
                        <button id="studysync-prompt-cancel" class="px-4 py-2 rounded-xl text-on-surface-variant hover:bg-surface-container-high transition-colors font-medium text-sm cursor-pointer">
                            ยกเลิก
                        </button>
                        <button id="studysync-prompt-ok" class="px-5 py-2 rounded-xl bg-primary text-on-primary hover:bg-primary/90 transition-colors font-medium text-sm shadow-sm cursor-pointer">
                            ตกลง
                        </button>
                    </div>
                </div>
            `;

            document.body.appendChild(overlay);

            const input = overlay.querySelector('#studysync-prompt-input');
            const cancelBtn = overlay.querySelector('#studysync-prompt-cancel');
            const okBtn = overlay.querySelector('#studysync-prompt-ok');

            input.focus();
            input.select();

            const cleanup = (result) => {
                overlay.remove();
                resolve(result);
            };

            cancelBtn.onclick = () => cleanup(null);
            okBtn.onclick = () => cleanup(input.value);
            input.onkeydown = (e) => {
                if (e.key === 'Enter') cleanup(input.value);
                if (e.key === 'Escape') cleanup(null);
            };
            overlay.onclick = (e) => {
                if (e.target === overlay) cleanup(null);
            };
        });
    }
};

// Global shortcuts
window.StudySyncUI = UI;
window.showToast = (msg, type, duration) => UI.toast(msg, type, duration);

// Intercept window.alert so all existing native alert() calls instantly turn into sleek modern toasts!
window.alert = function(msg) {
    UI.toast(msg);
};

