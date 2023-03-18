
const mockDataContacts = [
    {
        id: 1,
        name: "Ragul Sir",
        employeeid: 'dewfewfcec',
        email: "Rahul12@gmail.com",
        contact: "1312453354",
        role: "Contractor",
    },
    {
        id: 2,
        name: "suraj shelke",
        employeeid: 'dewfewfcec',
        email: "surajw1322@gmail.com",
        contact: "1312453354",
        role: "Contractor",
    },
    {
        id: 3,
        name: "vinit s",
        employeeid: 'dewfewfcec',
        email: "vinit2@gmail.com",
        contact: "1312453354",
        role: "Contractor",
    },

];

async function customemanagementfilter(name){
    const filterdata = function (name, employeeid) {
        if (name && employeeid) {
            let data = mockDataContacts.filter((e) => {
                if (e.name == name && e.employeeid == employeeid) {
                    return true
                } else {
                    return false
                }
            });
            return data;
        } else if (name) {
            let data = mockDataContacts.filter((z) => {
                if (z.name == name) {
                    return true
                } else {
                    return false
                }
            })
            // console.log(digits);
            return data;
        } else {
            let data = mockDataContacts.filter((e) => {
                if (e.employeeid == employeeid) {
                    return true
                } else {
                    return false
                }
            })
            return data;
        }
    }
    let ans = filterdata(name);
    return ans;
}
