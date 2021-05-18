/**
 * Created a constructor for employeepayroll data collection
 */
class EmployeePayroll {

    get id() {
        return this._id;
    }

    set id( id) {
        this._id = id;
    }

    get name() {
        return this._name;
    }

    /**
     * Checking for regex before inserting or setting values
     */
    set name( name) {
        let namgeRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
        if (namgeRegex.test(name)) {
            this._name = name;
        } else throw "Name is Incorrect!";
    }

    get profilePic() {
        return this._profilePic;
    }

    set profilePic( profilePic) {
        this._profilePic = profilePic;
    }

    get gender() {
        return this._gender;
    }

   set gender( gender) {
        this._gender = gender;
    }

    get department() {
        return this._department;
    }

     set department( department) {
        this._department = department;
    }

    get salary() {
        return this._salary;
    }

    set salary( salary) {
        this._salary = salary;
    }

    get startDate() {
        return this._startDate;
    }

    set startDate( startDate) {
        this._startDate = startDate;
    }

     get note() {
        return this._note;
    }

     set note( note) {
        this._note = note;
    }

    /**
     * Method to return data collected
     * @returns string formatted data
     */
    toString() {
        const options = {year: 'numeric', month: 'long', day: 'numeric'};
        const empDate = !this.startDate ? 'undefined': this.startDate.toLocaleDateString('en-Us', options);
        return "id=" + this.id + ", name=" + this.name + ", gender=" + this.gender + " ,profilePic=" + this.profilePic 
            + " ,departments=" + this.department + " ,salary=" + this.salary 
            + " ,startDate=" + empDate + " ,note=" + this.note;
    }    

}