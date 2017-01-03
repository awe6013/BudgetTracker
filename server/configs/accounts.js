import {Meteor} from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
//export default () => {

// For environment variable when testing locally


  Accounts.onCreateUser(function(options, user) {
    //let contact = this.getContact(redundantEmail)
    //console.log(options);
    //console.log(user);
    //user.email = options.contact.email;
    if (options.profile){
      user.profile = options.profile;
    }
    user.name=options.name;
    user.createdAt=new Date();
    setDefaultCats(user._id);
    return user;
  });

  function setDefaultCats(id){
    Cats.insert({ user: id, label : "Gross Income", type : "Income" });
    Cats.insert({ user: id, label : "Net Income", type : "Income" });;
    Cats.insert({ user: id, label : "Child Support or Alimony", type : "Income" });
    Cats.insert({ user: id, label : "Social Security Income", type : "Income" });
    Cats.insert({ user: id, label : "Disability Income", type : "Income" });
    Cats.insert({ user: id, label : "Pension Income", type : "Income" });
    Cats.insert({ user: id, label : "Investment Income", type : "Income" });
    Cats.insert({ user: id, label : "Real Estate Investment Income", type : "Income" });
    Cats.insert({ user: id, label : "Business Income", type : "Income" });
    Cats.insert({ user: id, label : "Other Income", type : "Income" });
    Cats.insert({ user: id, label : "Payroll Taxes", type : "Necessary Expenses" });
    Cats.insert({ user: id, label : "Other Income Deductions", type : "Necessary Expenses" });
    Cats.insert({ user: id, label : "Rent/Mortgage", type : "Necessary Expenses" });
    Cats.insert({ user: id, label : "Property Taxes", type : "Necessary Expenses" });
    Cats.insert({ user: id, label : "Water", type : "Necessary Expenses" });
    Cats.insert({ user: id, label : "Garbage", type : "Necessary Expenses" });
    Cats.insert({ user: id, label : "Gas & Electric", type : "Necessary Expenses" });
    Cats.insert({ user: id, label : "Auto Insurance", type : "Necessary Expenses" });
    Cats.insert({ user: id, label : "Auto Repairs", type : "Necessary Expenses" });
    Cats.insert({ user: id, label : "Food & Groceries (not dining out)", type : "Necessary Expenses" });
    Cats.insert({ user: id, label : "Clothing (necessary)", type : "Necessary Expenses" });
    Cats.insert({ user: id, label : "Telephone (not mobile)", type : "Necessary Expenses" });
    Cats.insert({ user: id, label : "Home or Renters Insurance", type : "Necessary Expenses" });
    Cats.insert({ user: id, label : "Healthcare or Insurance Costs", type : "Necessary Expenses" });
    Cats.insert({ user: id, label : "Dental Care or Insurance Costs", type : "Necessary Expenses" });
    Cats.insert({ user: id, label : "Life Insurance Costs", type : "Necessary Expenses" });
    Cats.insert({ user: id, label : "Student Loans", type : "Necessary Expenses" });
    Cats.insert({ user: id, label : "Home Repairs", type : "Necessary Expenses" });
    Cats.insert({ user: id, label : "Home Supplies", type : "Necessary Expenses" });
    Cats.insert({ user: id, label : "Dry Cleaning", type : "Necessary Expenses" });
    Cats.insert({ user: id, label : "Laundry", type : "Necessary Expenses" });
    Cats.insert({ user: id, label : "Investment Real Estate Expenses", type : "Necessary Expenses" });
    Cats.insert({ user: id, label : "Business Income Expenses", type : "Necessary Expenses" });
    Cats.insert({ user: id, label : "Childcare (daycare & babysitters)", type : "Necessary Expenses" });
    Cats.insert({ user: id, label : "Child & Baby Expenses", type : "Necessary Expenses" });
    Cats.insert({ user: id, label : "Other Dependent Expenses", type : "Necessary Expenses" });
    Cats.insert({ user: id, label : "Credit Card Bills", type : "Discretionary Expenses" });
    Cats.insert({ user: id, label : "Auto Loan(s)", type : "Discretionary Expenses" });
    Cats.insert({ user: id, label : "Gasoline", type : "Discretionary Expenses" });
    Cats.insert({ user: id, label : "Cable or Satellite TV", type : "Discretionary Expenses" });
    Cats.insert({ user: id, label : "Mobile Phone(s)", type : "Discretionary Expenses" });
    Cats.insert({ user: id, label : "Home Improvement", type : "Discretionary Expenses" });
    Cats.insert({ user: id, label : "Home Security", type : "Discretionary Expenses" });
    Cats.insert({ user: id, label : "Garden Supplies", type : "Discretionary Expenses" });
    Cats.insert({ user: id, label : "Entertainment", type : "Discretionary Expenses" });
    Cats.insert({ user: id, label : "Dining Out", type : "Discretionary Expenses" });
    Cats.insert({ user: id, label : "Travel & Vacation", type : "Discretionary Expenses" });
    Cats.insert({ user: id, label : "Pets, Pet Care and Pet Food", type : "Discretionary Expenses" });
    Cats.insert({ user: id, label : "Clothing (above what's needed)", type : "Discretionary Expenses" });
    Cats.insert({ user: id, label : "Internet Access", type : "Discretionary Expenses" });
    Cats.insert({ user: id, label : "Computer Costs", type : "Discretionary Expenses" });
    Cats.insert({ user: id, label : "Gym Membership", type : "Discretionary Expenses" });
    Cats.insert({ user: id, label : "Beer & Alcohol", type : "Discretionary Expenses" });
    Cats.insert({ user: id, label : "Cigarettes & Tobacco", type : "Discretionary Expenses" });
    Cats.insert({ user: id, label : "401K, 403B Deposits", type : "Investment Spending" });
    Cats.insert({ user: id, label : "IRA Deposits", type : "Investment Spending" });
    Cats.insert({ user: id, label : "Employee Stock Plans", type : "Investment Spending" });
    Cats.insert({ user: id, label : "Brokerage Deposits", type : "Investment Spending" });
    Cats.insert({ user: id, label : "Other", type : "Investment Spending" });
  }
  //
  // Accounts.onEnrollmentLink= function(token,done){
  //   //Accounts.resetPassword()
  //   FlowRouter.go("/signup/"+token);
  // };
  //
  // Accounts.emailTemplates.sitename = "Ivy";
  // Accounts.emailTemplates.from = "Ivy <no-reply@ivy.rit.edu>";
  // Accounts.emailTemplates.enrollAccount.subject = function(user){
  //   return "Ivy Account Creation Email Confirmation";
  // };
  // Accounts.emailTemplates.enrollAccount.text = function(user, url){
  //   //var name = Contacts.findOne(user.contact).name;
  //   var name = "name";
  //   return "Dear "+ name + "\n\nPlease follow the link below to set your password and create a username:\n\n"
  //   + "Confirmation link: " + url;
  // };
  // Accounts.emailTemplates.resetPassword.from = function(){
  //   return "Ivy Password Reset <no-reply@ivy.rit.edu>";
  // }

//}
