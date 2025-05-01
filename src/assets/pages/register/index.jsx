import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/inputs/InputField";
import Title from "../../components/header/Title";
import Divider from "../../components/ui/Divider";
import Buttons from "../../components/buttons/Buttons";
import ButtonGoogle from "../../components/buttons/ButtonGoogle";
import InputNumber from "../../components/inputs/InputNumber";
import ForgetPass from "../../components/ui/ForgetPass";
import InputGender from "../../components/inputs/InputGender";
import Navbar from "../../components/navbar/Navbar";
import InputPass from "../../components/inputs/InputPass";
import { useDispatch } from "react-redux";
import { login } from "@assets/store/redux/slices/authSlice";

import { addUser } from "../../../services/api/users";
import { createUser } from "@assets/store/redux/slices/userSlice";

const Container = ({ children }) => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
);

export default function RegisterForm() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [numberError, setNumberError] = useState("");
  const [passError, setPassError] = useState("");
  const [confirmPassError, setConfirmPassError] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  // fungsi untuk mengubah nilai name
  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError("");
  };

  // fungsi untuk mengubah nilai email
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  // fungsi untuk mengubah nilai number
  const handleNumberChange = (e) => {
    setNumber(e.target.value);
    setNumberError("");
  };

  // Fungsi untuk menampilkan atau menyembunyikan password
  const togglePassVisibility = () => {
    setShowPass((prev) => !prev);
  };

  const toggleConfirmPassVisibility = () => {
    setShowConfirmPass((prev) => !prev);
  };

  // Fungsi untuk mengubah nilai password
  const handlePassChange = (e) => {
    const { name, value } = e.target;
    if (name === "password") {
      setPassword(value);
      setPassError("");
    }
  };

  const handleConfirmPassChange = (e) => {
    const { name, value } = e.target;
    if (name === "password") {
      setConfirmPass(value);
      setConfirmPassError("");
    }
  };

  // Fungsi untuk melakukan register
  const handleSubmit = async (e) => {
    e.preventDefault();

    // validasi
    if (!name) {
      setNameError("Nama harus di isi");
      return;
    } else if (name.length < 3) {
      setNameError("Nama kurang dari 3 karakter");
      return;
    }

    if (!email) {
      setEmailError("Email harus di isi");
      return;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Email tidak valid");
      return;
    }

    if (!number) {
      setNumberError("No. Hp harus di isi");
      return;
    } else if (!/^\d+$/.test(number)) {
      setNumberError("No. Hp harus angka");
      return;
    } else if (number.length < 10) {
      setNumberError("No. Hp kurang dari 10 angka");
      return;
    }

    if (!password) {
      setPassError("Kata sandi harus di isi");
      return;
    } else if (password.length < 6) {
      setPassError("Kata sandi harus minimal 6 karakter");
      return;
    }

    if (!confirmPass) {
      setConfirmPassError("Konfirmasi kata sandi harus di isi");
      return;
    } else if (password !== confirmPass) {
      setConfirmPassError("Konfirmasi kata sandi tidak sama");
      return;
    }

    const newUser = {
      name,
      email,
      gender,
      number,
      password,
      confirmPass,
      role: "user",
    };

    try {
      const response = await addUser(newUser);
      const createdUser = response.data;

      localStorage.setItem("currentUser", JSON.stringify(createdUser));
      localStorage.removeItem("users");

      dispatch(login(createdUser));
      navigate("/");
    } catch (error) {
      console.error("Register error:", error);
      setError("Gagal daftar, coba lagi nanti.");
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Form Container */}
      <Container>
        <div className="bg-white border w-[320px] sm:w-[480px] md:w-[590px] my-[28px] lg:my-[64px] mx-auto p-5 md:p-9 gap-9">
          <Title
            title="Pendaftaran Akun"
            desc="Yuk, daftarkan akunmu sekarang juga!"
          />

          <Input
            value={name}
            name="name"
            labelName="Nama Lengkap"
            id="username"
            type="username"
            onChange={handleNameChange}
            onKeyDown={onKeyDown}
            error={nameError}
          />

          <Input
            value={email}
            name="email"
            labelEmail="E-Mail"
            id="email"
            type="email"
            onChange={handleEmailChange}
            onKeyDown={onKeyDown}
            error={emailError}
          />

          <InputGender children="Jenis Kelamin" />

          <InputNumber
            value={number}
            name="number"
            label="No. Hp"
            onChange={handleNumberChange}
            onKeyDown={onKeyDown}
            error={numberError}
          />

          <InputPass
            name="password"
            value={password}
            labelPass="Kata Sandi"
            id="password"
            type={showPass}
            onChange={handlePassChange}
            togglePassVisibility={togglePassVisibility}
            showPass={showPass}
            onKeyDown={onKeyDown}
            error={passError}
          />

          <InputPass
            name="password"
            value={confirmPass}
            labelPass="Konfirmasi Kata Sandi"
            id="password"
            type={showConfirmPass}
            onChange={handleConfirmPassChange}
            togglePassVisibility={toggleConfirmPassVisibility}
            showPass={showConfirmPass}
            onKeyDown={onKeyDown}
            error={confirmPassError}
          />

          <ForgetPass />

          <div className="flex flex-col items-center gap-4">
            <Buttons
              bg={"#3ECF4C"}
              children={"Daftar"}
              color={"white"}
              onClick={handleSubmit}
            />

            <Buttons
              bg={"#E2FCD9CC"}
              onClick={handleLogin}
              children={"Masuk"}
              color={"#3ECF4C"}
            />

            <Divider text="atau" />

            <ButtonGoogle text="Daftar dengan Google" />
          </div>
        </div>
      </Container>
    </>
  );
}
