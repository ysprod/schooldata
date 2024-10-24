 
import { Student } from "@/lib/interfaces";

export type StudentFormProps = Omit<Student, "id">;

export const dataForm: StudentFormProps = {
  userId: "0",
  address : "",
  birthday : "",
  bloodType : "",
  email : "",
  firstName : "",
  lastName : "",
  password : "",
  phone : "",
  sex : "",
  username : "",
  urlphoto : "",
  lieunaissance : "",
  nationalite : "",    
};


export const dataFormr: StudentFormProps = {
  userId: "0",
  address: "ABIDJAN COCODY ANGRÉ RUE DES BARS",
  birthday: "2024-08-31",
  bloodType: "tyiyti",
  email: "yayasidibeproduction@gmail.com",
  firstName: "CITEkukytkiyti",
  lastName: "SIRtyiytityi",
  password: "123456789",
  phone: "0758385387",
  sex: "male",
  username: "yayasi",
  urlphoto: "./avatar.png",
  lieunaissance: "",
  nationalite: "",
}
