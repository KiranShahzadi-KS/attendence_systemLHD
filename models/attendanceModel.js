const mongoose = require("mongoose");

const attendenceSchema = new mongoose.Schema(
  {
    Date: {},
    Intime: {},
    Insource: {},
    Outtime: {},
    Outsource: {},
    Officetime: {},
    Late: {},
    Extra: {},
    Reason: {},
    Deducted: {},

    Attendeddays: {
      type: Number,
      default: 0,
    },
    Workingdays: {},
    Leavedays: {},
    leaveDays: {},
    Extraminutes: {},
    LateAttendanceday: {},

    Totalsalary: {},
    empId: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Attendence", attendenceSchema);
