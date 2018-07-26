



const getUserDOBAsInt = (applicant_dob) => {
    /*
     * input:  applicant_dob in terms of a string
     * output: a integer representing the year of applicant_dob
     *
     * author: John.Zhou
     * date: 18 July 2018
     * version: 0.1
     *
     * introduction:
     * currently, in lendi postgresql, dob mainly has the following three formats
     * 1 1999-12-12
     * 2 20/08/1991
     * 3 NULL
     * dob can also has other invalid characters since users may mistakenly input their dobs
     * if the user inputs invalid character, the program will output 1918, then the user's age will be pretty large and will be less likely to be approved
     * to get a loan
     *
     * history:
     *
     */
    const DEFAULT_DOB_INT = -1;
    if (applicant_dob == false || applicant_dob == undefined || applicant_dob.length === 0) {
        return DEFAULT_DOB_INT;
    }
    const dobAsInt = applicant_dob.match(/\d\d\d\d/);
    let res = 0;
    if (dobAsInt != null && dobAsInt[0]) {
        res = parseInt(dobAsInt[0]);
        return res;
    }
    return DEFAULT_DOB_INT;
}

const getMaxUserAgeAtEndOfLoanTerm = (users, loanData) => {
    /*
     * input:  users, loanData
     * output: MaxUserAgeAtEndOfLoanTerm
     * if user dob is invalid, then return -1
     *
     * author: John.Zhou
     * date: 26 July 2018
     * version: 0.1
     *
     *
     */
    const currentYear = parseInt(moment(new Date()).format('YYYY'));
    let res = -1;
    for (let user of users) {
        const userDOBYearAsInt = getUserDOBAsInt(user.applicant_dob);
        if (userDOBYearAsInt <= 0) {
            return -1;
        }
        res = Math.max(res, currentYear - userDOBYearAsInt + parseInt(loanData.tenure));
    }
    return res;
}

export { getUserDOBAsInt, getMaxUserAgeAtEndOfLoanTerm }; 


