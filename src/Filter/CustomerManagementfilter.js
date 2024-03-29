
export async function customemanagementfilter(checkforfilter, rowsdata) {
    let Contractor = checkforfilter.Contractor;
    let Area = checkforfilter.Area;
    const filterdata = async function (Contractor, Area) {
        if (Contractor && Area) {
            let data = rowsdata.filter((e) => {
                if (e.Contractor == Contractor && e.Area == Area) {
                    return true
                } else {
                    return false
                }
            });
            return data;
        } else if (Contractor) {
            let data = rowsdata.filter((z) => {
                if (z.Contractor == Contractor) {
                    return true
                } else {
                    return false
                }
            })
            return data;
        } else {
            let data = rowsdata.filter((e) => {
                if (e.Area == Area) {
                    return true
                } else {
                    return false
                }
            })
            return data;
        }
    }
    let ans = await filterdata(Contractor, Area);
    return ans;
}
export async function usermanagementfilter(checkforfilter, rowsdata) {

    const filterdata = async function (checkforfilter) {
        if (checkforfilter) {
            let data = rowsdata.filter(async (user) => {
                if (user.type == checkforfilter) {
                    return true;
                } else {
                    return false;
                }
            });
            return data;
        }else{
            return null;
        }
    }
    let ans = await filterdata(checkforfilter);
    return ans;
}
