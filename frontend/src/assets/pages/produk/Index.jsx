import NavbarProfile from '@components/navbar/NavbarProfile'
import React from 'react'
import Footer from '../home/homeComponent/Footer';
import SortDropdown from './components/SortDropdown';
import SearchInput from './components/SearchInput';
import CardList from './components/CardList';
import Pagination from './components/Pagination';
import Header from './components/Header';
import Kategori from './components/Kategori';


const Container = ({ children }) => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
);
export default function index() {
    return (
        <div>
            <NavbarProfile imageName={"Avatar.png"} text={"Kategori"} color={"#3ECF4C"} />

            <Container>

                <Header />

                <div className='flex flex-col justify-center lg:flex-row pb-[64px] gap-[24px] lg:gap-[42px]'>
                    <Kategori />

                    <div className='flex flex-col '>
                        <div className='flex flex-row gap-4 justify-start lg:justify-end w-full '>
                            <div>
                                <SortDropdown />
                            </div>
                            <div>
                                <SearchInput />
                            </div>
                        </div>

                        <div>
                            <CardList />
                        </div>

                        <div className='flex justify-end'>
                            <Pagination />
                        </div>
                    </div>
                </div>
            </Container>

            <Footer />
        </div>
    )
}
