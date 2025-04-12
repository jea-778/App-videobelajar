import React, { useState } from "react";
import NavbarProfile from "../../components/navbar/NavbarProfile";
import Tab from "./components/Tab";
import ProfileForm from "./components/ProfileForm";
import Footer from "../home/homeComponent/Footer";

const Container = ({ children }) => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
);

export default function ProfilePage() {
  return (
    <>
      <div className="overflow-x-hidden">
        <NavbarProfile imageName={"Avatar.png"} text={"Kategori"} />

        <Container>
          <div className="flex lg:flex-row flex-col gap-9 pt-[28px] sm:pt-[64px] pb-[81px] ">
            <Tab />

            <ProfileForm />
          </div>
        </Container>

        <Footer />
      </div>
    </>
  );
}
