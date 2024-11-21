import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
const Results = () => {
const location = useLocation();
const { formData } = location.state;
let salary = parseFloat(formData.salary*12);
let bonus = parseFloat(formData.bonus);
let salaryOfYears = bonus + salary;
let outlay = 0.5*salaryOfYears;

if(outlay<=100000){
    outlay*0.5;
}else {
    outlay = 100000;
}


let me = 60000;
let children = parseFloat(formData.children) * 30000;

if(children<=60000){
    children*30000;
}else {
    children=60000;
}

let socialsecurity = parseFloat(formData.socialsecurity)*12;

if(socialsecurity<=30000) {
    socialsecurity*30000;
}else {
    socialsecurity = 30000;
}

let lifepremiums = parseFloat(formData.lifepremiums);

if(lifepremiums<=100000){
    lifepremiums*100000;
}else {
    lifepremiums = 100000;
}

let deductions = me+children+lifepremiums+socialsecurity;
let income = salaryOfYears-outlay-deductions;

let tax = 0;
if(income<=100000){
    tax = 0;
}else if(income<=300000) {
    tax = 0.05;
}else if(income<=1000000){
    tax = 0.10;
}else{
    tax=0.15;
}

return (
    <div className="min-h-screen bg-pink-100 flex items-center justify-center p-6">
    <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
      <h1 className="text-2xl font-bold text-center text-red-500 mb-6">
        ผลลัพธ์การคำนวณ
      </h1>
      <div className="space-y-4">
        <p className="text-gray-700 text-lg">
          <strong>เงินได้ทั้งปี:</strong> {salaryOfYears} บาท
        </p>
        <p className="text-gray-700 text-lg">
          <strong>ค่าใช้จ่าย:</strong> {outlay} บาท
        </p>
        <p className="text-gray-700 text-lg">
          <strong>ค่าลดหย่อน:</strong> {deductions} บาท
        </p>
        <p className="text-gray-700 text-lg">
          <strong>เงินได้พึงสุทธิ:</strong> {income} บาท
        </p>
        <p className="text-gray-700 text-lg">
          <strong>หักภาษี ณ ที่จ่าย:</strong> {tax * 100}%
        </p>
        <p className="text-gray-700 text-lg">
          <strong>ภาษีที่ต้องชำระ:</strong> {income * tax} บาท
        </p>
      </div>
    </div>
  </div>
);
};
export default Results;