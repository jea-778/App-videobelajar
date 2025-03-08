import React from 'react';
import Input from '../components/inputs/InputField';
import Title from '../components/header/Title';
import Divider from '../components/ui/Divider';
import Buttons from '../components/buttons/Buttons';
import ButtonGoogle from '../components/buttons/ButtonGoogle';
import Eye from '../components/ui/Eye';
import Eye2 from '../components/ui/Eye2';
import ForgetPass from '../components/ui/ForgetPass';
import Navbar from '../components/navbar/Navbar';

const Container = ({ children }) => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {children}
  </div>
);

export default function LoginForm() {
  return (
    <>
    
        {/* Navbar */}
        <Navbar/>

        {/* Form Container */}
        <Container>

        <div className='bg-white border h-[514px] md:h-[590px] w-[320px] sm:w-[480px] md:w-[590px] my-[28px] md:my-[163px] mx-auto p-5 md:p-9 gap-9'>

        <Title title="Masuk ke akun" desc="Yuk, lanjutin belajarmu di videobelajar." />

        <Input labelEmail="E-Mail" id="email" type="email" />

        <Input labelPass="Kata Sandi" id="password" type="password" />
        <Eye/>

        <ForgetPass/>

        <div className='flex flex-col items-center gap-4'>
        <Buttons bg={"#3ECF4C"} href={"/home"} children={"Masuk"} color={"white"}/>
        <Buttons bg={"#E2FCD9CC"} href={"/register"} children={"Daftar"} color={"#3ECF4C"}/>

        <Divider text="atau"/>


        <ButtonGoogle text='Masuk dengan Google'/>
        </div>
        
      </div>

      </Container>

    </>
  )
}

