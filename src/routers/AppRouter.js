import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { LoginScreen } from '../pages/auth/LoginScreen';
import { ArtistDetailScreen } from '../pages/screens/ArtistDetailScreen';
import { BandsScreen } from '../pages/screens/BandsScreen';

import PrivateRoute from './PrivateRoute';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={<LoginScreen />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<BandsScreen />} />
          <Route path="/artist" element={<ArtistDetailScreen />} />

          <Route path="*" element={<Navigate to ="/" />}/>
        </Route>

        <Route path="*" element={<Navigate to ="/" />}/>
      </Routes>
    </BrowserRouter>
  )
}
