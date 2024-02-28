

import React, { Suspense } from "react";
import Navbar from "./_components/navbar";
import  {Sidebar, SideBarSkeleton } from "./_components/sidebar";
import { Container } from "./_components/container";

const BrowseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="flex h-full pt-20">
        <Suspense fallback={<SideBarSkeleton/>}>
        <Sidebar />
        <Container>
        {children}
        </Container>
        </Suspense>
      </div>
    </>
  );
};

export default BrowseLayout;
