import React, { useState, useEffect } from "react";
import Input from "./inputs/InputField.jsx";
import InputNumber from "./inputs/InputNumber.jsx";
import Select from "./Select.jsx";
import InputGender from "./inputs/InputGender.jsx";
import InputPass from "./inputs/InputPass.jsx";
import UserData from "./UserData.jsx";
import Button from "./Button";
import { Navigate, useNavigate } from "react-router-dom";
import useAuthStore from "../../../store/authstore.js";

export default function ProfileForm() {
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
  const Navigate = useNavigate();
  const { isLoggedIn, logout } = useAuthStore();

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError("");
  };

  const handleChangeProfile = (e) => {
    console.log("foto di ubah");
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

  const handleDelete = (e) => {
    e.preventDefault();
    localStorage.removeItem("currentUser");
    localStorage.removeItem("users");
    logout();
    Navigate("/");
  };

  const handleSave = (e) => {
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
      setNumberError("No. Hp kurang 10 angka");
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
      id: users.length + 1,
      name,
      email,
      gender,
      number,
      password,
      confirmPass,
      role: "user",
    };

    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("currentUser", JSON.stringify(newUser));
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  useEffect(() => {
    const userString = localStorage.getItem("currentUser");
    if (userString) {
      const user = JSON.parse(userString);

      setName(user.name || "");
      setEmail(user.email || "");
      setGender(user.gender || "");
      setNumber(user.number || "");
      setPassword(user.password || "");
      setConfirmPass(user.confirmPass || "");
    }
  }, []);

  return (
    <div className="flex flex-col bg-white border rounded-lg p-6 gap-6 ">
      <UserData name={name} email={email} onClick={handleChangeProfile} />

      <div className="pt-4 md:pt-0">
        <hr className="w-5/5 mx-auto border border-[#3A35411F] " />
      </div>

      {/* Input */}
      <form
        onKeyDown={onKeyDown}
        className="flex md:flex-row flex-col gap-4 w-full max-w-4xl mx-auto"
      >
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
          labelName="E-Mail"
          id="email"
          type="email"
          onChange={handleEmailChange}
          onKeyDown={onKeyDown}
          error={emailError}
        />

        <InputGender />

        <div className="flex gap-4">
          <Select />

          <InputNumber
            value={number}
            name="number"
            label="No. Hp"
            onChange={handleNumberChange}
            onKeyDown={onKeyDown}
            error={numberError}
          />
        </div>

        <InputPass
          name="password"
          value={password}
          labelName="Kata Sandi"
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
          labelName="Konfirmasi Kata Sandi"
          id="password"
          type={showConfirmPass}
          onChange={handleConfirmPassChange}
          togglePassVisibility={toggleConfirmPassVisibility}
          showPass={showConfirmPass}
          onKeyDown={onKeyDown}
          error={confirmPassError}
        />
      </form>

      <div className="flex justify-center lg:justify-end gap-4">
        <Button
          text="Delete"
          bg="#F64920"
          hover="white"
          onClick={handleDelete}
        />
        <Button text="Simpan" bg="#3ECF4C" hover="black" onClick={handleSave} />
      </div>
    </div>
  );
}
