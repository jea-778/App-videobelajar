import React, { useState } from "react";
import Input from "../../components/inputs/InputField";
import InputPass from "../../components/inputs/InputPass";
import Title from "../../components/header/Title";
import Divider from "../../components/ui/Divider";
import Buttons from "../../components/buttons/Buttons";
import ButtonGoogle from "../../components/buttons/ButtonGoogle";
import ForgetPass from "../../components/ui/ForgetPass";
import Navbar from "../../components/navbar/Navbar";
import useAuthStore from "../../store/authstore";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../../../services/api/users";

const Container = ({ children }) => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
);

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const [passError, setPasswordError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuthStore();

  // Fungsi untuk mengubah nilai email
  const handleEmailChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
      setError("");
    }
  };

  // Fungsi untuk menampilkan atau menyembunyikan password
  const togglePassVisibility = () => {
    setShowPass((prev) => !prev);
  };

  const handlePassChange = (e) => {
    const { name, value } = e.target;
    if (name === "password") {
      setPassword(value);
      setPasswordError("");
    }
  };

  // Fungsi untuk melakukan login
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      if (!email) {
        setError("Email harus di isi");
        return;
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        setError("Email tidak valid");
        return;
      }

      // Validasi password
      if (!password) {
        setPasswordError("Kata sandi harus di isi");
        return;
      } else if (password.length < 6) {
        setPasswordError("Kata sandi harus minimal 6 karakter");
        return;
      }

      const response = await getUsers();
      const users = response.data;

      const foundUser = users.find(
        (user) => user.email === email && user.password === password
      );

      if (foundUser) {
        localStorage.setItem("currentUser", JSON.stringify(foundUser));
        useAuthStore.getState().login();
        navigate("/");
      } else {
        setError("Email atau password salah");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Terjadi kesalahan saat login");
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/register");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleLogin(e);
    }
  };

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Form Container */}
      <Container>
        <div className="bg-white border w-[320px] sm:w-[480px] md:w-[590px] my-[28px] md:my-[163px] mx-auto p-5 md:p-9 gap-9">
          <Title
            title="Masuk ke akun"
            desc="Yuk, lanjutin belajarmu di videobelajar."
          />

          <form onSubmit={handleLogin}>
            <Input
              name="email"
              labelEmail="E-Mail"
              id="email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              onKeyDown={handleKeyDown}
              error={error}
            />

            <InputPass
              name="password"
              labelPass="Kata Sandi"
              id="password"
              type={showPass}
              value={password}
              onChange={handlePassChange}
              onKeyDown={handleKeyDown}
              error={passError}
              showPass={showPass}
              togglePassVisibility={togglePassVisibility}
            />

            <ForgetPass />

            <div className="flex flex-col items-center gap-4">
              <Buttons
                bg={"#3ECF4C"}
                children={"Masuk"}
                color={"white"}
                onClick={handleLogin}
              />

              <Buttons
                bg={"#E2FCD9CC"}
                href={"/register"}
                children={"Daftar"}
                color={"#3ECF4C"}
                onClick={handleRegister}
              />

              <Divider text="atau" />

              <ButtonGoogle text="Masuk dengan Google" />
            </div>
          </form>
        </div>
      </Container>
    </>
  );
}
