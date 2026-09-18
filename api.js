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
    },
    // 4. ฟังก์ชันแก้ไขบันทึกการเรียน
    updateStudyLog: async (logData) => {
        try {
            const response = await fetch(GAS_WEB_APP_URL, {
                method: 'POST',
                body: JSON.stringify({
                    action: 'updateStudyLog',
                    payload: logData
                })
            });
            const result = await response.json();
            return result;
        } catch (error) {
            console.error("Error updating study log:", error);
            return { status: 'error', message: error.toString() };
        }
    },

    // 5. ฟังก์ชันลบบันทึกการเรียน
    deleteStudyLog: async (logId) => {
        try {
            const response = await fetch(GAS_WEB_APP_URL, {
                method: 'POST',
                body: JSON.stringify({
                    action: 'deleteStudyLog',
                    payload: { id: logId }
                })
            });
            const result = await response.json();
            return result;
        } catch (error) {
            console.error("Error deleting study log:", error);
            return { status: 'error', message: error.toString() };
        }
    },

    // 6. ฟังก์ชันดึงงานและการสอบทั้งหมด
    getAssignments: async () => {
        try {
            const response = await fetch(`${GAS_WEB_APP_URL}?action=getAssignments`);
            const result = await response.json();
            return result.data || [];
        } catch (error) {
            console.error("Error fetching assignments:", error);
            return [];
        }
    },

    // 7. ฟังก์ชันเพิ่มงานและการสอบใหม่
    addAssignment: async (assignmentData) => {
        try {
            const response = await fetch(GAS_WEB_APP_URL, {
                method: 'POST',
                body: JSON.stringify({
                    action: 'addAssignment',
                    payload: assignmentData
                })
            });
            const result = await response.json();
            return result;
        } catch (error) {
            console.error("Error adding assignment:", error);
            return { status: 'error', message: error.toString() };
        }
    },

    // 8. ฟังก์ชันลบงานและการสอบ
    deleteAssignment: async (assignmentId) => {
        try {
            const response = await fetch(GAS_WEB_APP_URL, {
                method: 'POST',
                body: JSON.stringify({
                    action: 'deleteAssignment',
                    payload: { id: assignmentId }
                })
            });
            const result = await response.json();
            return result;
        } catch (error) {
            console.error("Error deleting assignment:", error);
            return { status: 'error', message: error.toString() };
        }
    }
};

window.StudySyncAPI = API;
