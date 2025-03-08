import React from 'react';
import Input from '../components/inputs/InputField';
import Title from '../components/header/Title';
import Divider from '../components/ui/Divider';
import Buttons from '../components/buttons/Buttons';
import ButtonGoogle from '../components/buttons/ButtonGoogle';
import InputNumber from '../components/inputs/InputNumber';
import Eye2 from '../components/ui/Eye2';
import ForgetPass from '../components/ui/ForgetPass';
import InputGender from '../components/inputs/InputGender';
import Eye from '../components/ui/Eye';
import Navbar from '../components/navbar/Navbar';

const Container = ({ children }) => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {children}
  </div>
);

export default function RegisterForm() {
  return (
    <>

      {/* Navbar */}
      <Navbar />

      {/* Form Container */}
      <Container>
      <div className='bg-white border h-[866px] md:h-[893px] w-[320px] sm:w-[480px] md:w-[590px] my-[28px] md:my-[64px] mx-auto p-5 md:p-9 gap-9'>

        <Title title="Pendaftaran Akun" desc="Yuk, daftarkan akunmu sekarang juga!" />


        <Input labelName="Nama Lengkap" id="username" type="username" />

        <Input labelEmail="E-Mail" id="email" type="email" />

        <InputGender children="Jenis Kelamin"/>

        <InputNumber label="No. Hp" />

        <Input labelPass="Kata Sandi" id="password" type="password" />
        <Eye/>

        <Input labelPass="Konfirmasi Kata Sandi" id="password" type="password" />
        <Eye/>


        <ForgetPass/>

        <div className='flex flex-col items-center gap-4'>
        <Buttons bg={"#3ECF4C"} href={"/home"} children={"Daftar"} color={"white"}/>
        <Buttons bg={"#E2FCD9CC"} href={"/"} children={"Masuk"} color={"#3ECF4C"}/>

        <Divider text="atau"/>

        <ButtonGoogle text="Daftar dengan Google"/>
        </div>
      </div>
      </Container>

    </>
  )
}

