//UC-4 template -1
// window.addEventListener("DOMContentLoaded", (event) => {
//     createInnerHtml();
// });

// // Template literal ES6 feature
// const createInnerHtml = () => {
//     const innerHtml = `
//     <tr>
//         <th></th>
//         <th>Name</th>
//         <th>Gender</th>
//         <th>Department</th>
//         <th>Salary</th>
//         <th>Start Date</th>
//         <th>Actions</th>
//     </tr>
//     <tr>
//         <td><img class="profile" alt="" src="../assests/profile-images/Ellipse -2.png"></td>
//         <td>Narayan Mahadevan</td>
//         <td>Male</td>
//         <td>
//             <div class="dept-label">HR</div>
//             <div class="dept-label">Finance</div>
//         </td>
//         <td>3000000</td>
//         <td>1 Nov 2020</td>
//         <td>
//             <img class="table-icon-delete " id=" 1" onclick="remove(this)" alt="delete" src="../assests/icons/delete-icon.png">
//             <img class="table-icon-edit" id="1" alt="edit" onclick="update(this)" src="../assests/icons/edit-icon.png">
//         </td>
//     </tr>
//     `;
//     document.querySelector('#table-display').innerHTML = innerHtml;
// }


// //UC-4 template -2
// window.addEventListener("DOMContentLoaded", (event) => {
//     createInnerHtml();
// });

// const createInnerHtml = () => {
//     const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th>"
//     const innerHtml = `${headerHtml};
//     <tr>
//         <td><img class="profile" alt="" src="../assests/profile-images/Ellipse -2.png"></td>
//         <td>Narayan Mahadevan</td>
//         <td>Male</td>
//         <td>
//             <div class="dept-label">HR</div>
//             <div class="dept-label">Finance</div>
//         </td>
//         <td>3000000</td>
//         <td>1 Nov 2020</td>
//         <td>
//             <img class="table-icon-delete " id=" 1" onclick="remove(this)" alt="delete" src="../assests/icons/delete-icon.png">
//             <img class="table-icon-edit" id="1" alt="edit" onclick="update(this)" src="../assests/icons/edit-icon.png">
//         </td>
//     </tr>
//     `;
//     document.querySelector('#table-display').innerHTML = innerHtml;
// }

//UC-5 template -1
// const createInnerHtml = () => {
//     const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th>"
//     let employeePayrollData = createEmployeePayroll()[0];
//     const innerHtml = `${headerHtml};
//     <tr>
//         <td><img class="profile" alt="" src="${employeePayrollData._profilePic}"></td>
//         <td>${employeePayrollData._name}</td>
//         <td>${employeePayrollData._gender}</td>
//         <td>
//             <div class="dept-label">${employeePayrollData._department[0]}</div>
//             <div class="dept-label">${employeePayrollData._department[1]}</div></div>
//         </td>
//         <td>${employeePayrollData._salary}</td>
//         <td>${employeePayrollData._startDate}</td>
//         <td>
//             <img name="${employeePayrollData._id}" class="table-icon-delete " id=" 1" onclick="remove(this)" alt="delete" src="../assests/icons/delete-icon.png">
//             <img name="${employeePayrollData._id}" class="table-icon-edit" id="1" alt="edit" onclick="update(this)" src="../assests/icons/edit-icon.png">
//         </td>
//     </tr>
//     `;
//     document.querySelector('#table-display').innerHTML = innerHtml;
// }

//UC-5 template - 2
// window.addEventListener("DOMContentLoaded", (event) => {
//     createInnerHtml();
// });
// const createInnerHtml = () => {
//     const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th>"
//     let employeePayrollData = createEmployeePayroll()[0];
//     const innerHtml = `${headerHtml};
//     <tr>
//         <td><img class="profile" alt="" src="${employeePayrollData._profilePic}"></td>
//         <td>${employeePayrollData._name}</td>
//         <td>${employeePayrollData._gender}</td>
//         <td><${getDeptHtml(employeePayrollData._department)}</td>
//         <td>${employeePayrollData._salary}</td>
//         <td>${employeePayrollData._startDate}</td>
//         <td>
//             <img name="${employeePayrollData._id}" class="table-icon-delete " id=" 1" onclick="remove(this)" alt="delete" src="../assests/icons/delete-icon.png">
//             <img name="${employeePayrollData._id}" class="table-icon-edit" id="1" alt="edit" onclick="update(this)" src="../assests/icons/edit-icon.png">
//         </td>
//     </tr>
//     `;
//     document.querySelector('#table-display').innerHTML = innerHtml;
// }

//UC-5 template - 3
// window.addEventListener("DOMContentLoaded", (event) => {
//     createInnerHtml();
// });

// const createInnerHtml = () => {
//     const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th>"
//     const innerHtml = `${headerHtml}`;
//     let employeePayrollList = createEmployeePayrollJSON();
//     for (const employeePayrollData of employeePayrollList) {
//         innerHtml = `${innerHtml}
//     <tr>
//         <td><img class="profile" alt="" src="${employeePayrollData._profilePic}"></td>
//         <td>${employeePayrollData._name}</td>
//         <td>${employeePayrollData._gender}</td>
//         <td><${getDeptHtml(employeePayrollData._department)}</td>
//         <td>${employeePayrollData._salary}</td>
//         <td>${employeePayrollData._startDate}</td>
//         <td>
//             <img name="${employeePayrollData._id}" class="table-icon-delete " id=" 1" onclick="remove(this)" alt="delete" src="../assests/icons/delete-icon.png">
//             <img name="${employeePayrollData._id}" class="table-icon-edit" id="1" alt="edit" onclick="update(this)" src="../assests/icons/edit-icon.png">
//         </td>
//     </tr>
//     `;
//     }
//     document.querySelector('#table-display').innerHTML = innerHtml;
// }

// const getDeptHtml = (deptList) => {
//     let deptHtml = '';
//     for (const dept of deptList) {
//         deptHtml = `${deptHtml} <div class="dept-label">${dept}</div>`
//     }
//     return deptHtml;
// }

// const createEmployeePayrollJSON = () => {
//     let empPayrollListLocal = [{
//             _name: 'Narayan Mahadevan',
//             _gender: 'male',
//             _department: [
//                 'Engineering',
//                 'Finance'
//             ],
//             _salary: '500000',
//             _startDate: '29 Oct 2019',
//             _note: '',
//             _id: new Date().getTime(),
//             _profilePic: '../assets/profile-images/Ellipse -2.png'
//         },
//         {
//             _name: 'Anarpa Shashanka Keerthi Kumar',
//             _gender: 'female',
//             department: [
//                 'Sales'
//             ],
//             _salary: '400808',
//             _startDate: '29 Oct 2019',
//             _note: '',
//             _id: new Date().getTinel() + 1,
//             _profilePic: '../assets/profile-images/Ellipse -1.png'
//         }
//     ];
//     return empPayrollListLocal;
// }

//UC-6 template 
let empPayrolllist;
window.addEventListener('DOMContentLoaded', (event) => {
    empPayrollList = getEmployeePayrollDataFronStoragel();
    document.querySelector(".emp-count").textContent = enpPayrolllist.length;
    createInnerHtml();
    localStorage.removeItem('editEmp');
});

const getEmployeePayrollDataFromStorage = () => {
    return localStorage.getItem('EmployeePayrollList') ?
        JSON.parse(localStorage.getItem('EmployeePayrollList')) : [];
}
const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Nane</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th>";
    if (emppayrolllist.length == 0) return;
    let innerHtml = `${headerHtml}`;
    for (const enpPayrollData of emppayrolllist) {
        innerHtml = `${innerHtml}
            <tr>
                <td><img class="profile" alt="" src="${employeePayrollData._profilePic}"></td>
                <td>${employeePayrollData._name}</td>
                <td>${employeePayrollData._gender}</td>
                <td><${getDeptHtml(employeePayrollData._department)}</td>
                <td>${employeePayrollData._salary}</td>
                <td>${employeePayrollData._startDate}</td>
                <td>
                    <img name="${employeePayrollData._id}" class="table-icon-delete " id=" 1" onclick="remove(this)" alt="delete" src="../assests/icons/delete-icon.png">
                    <img name="${employeePayrollData._id}" class="table-icon-edit" id="1" alt="edit" onclick="update(this)" src="../assests/icons/edit-icon.png">
                </td>
            </tr>
        `;
    }
    document.querySelector('#table-display').innerHTML = innerHtml;
}