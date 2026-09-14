// api.js
// จัดการการเชื่อมต่อกับ Google Apps Script (REST API)

const GAS_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbziD7T6VcrVRc33Lh4a6cthU_Mc8V2r_JDVL-Zj0tAJ7bJhVGUf6t95b-MXavSlX4dW/exec';

const API = {
    // 1. ฟังก์ชันดึงข้อมูลวิชาทั้งหมด
    getSubjects: async () => {
        try {
            const response = await fetch(`${GAS_WEB_APP_URL}?action=getSubjects`);
            const result = await response.json();
            return result.data || [];
        } catch (error) {
            console.error("Error fetching subjects:", error);
            return [];
        }
    },

    // 2. ฟังก์ชันดึงประวัติการเรียนทั้งหมด
    getStudyLogs: async () => {
        try {
            const response = await fetch(`${GAS_WEB_APP_URL}?action=getStudyLogs`);
            const result = await response.json();
            return result.data || [];
        } catch (error) {
            console.error("Error fetching study logs:", error);
            return [];
        }
    },

    // 3. ฟังก์ชันบันทึกการเรียนใหม่
    addStudyLog: async (logData) => {
        try {
            const response = await fetch(GAS_WEB_APP_URL, {
                method: 'POST',
                body: JSON.stringify({
                    action: 'addStudyLog',
                    payload: logData
                })
            });
            const result = await response.json();
            return result;
        } catch (error) {
            console.error("Error adding study log:", error);
            return { status: 'error', message: error.toString() };
        }
    }
};

window.StudySyncAPI = API;
