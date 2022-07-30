import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './Router';
import { Provider } from 'react-redux';
import { store } from './store';

export const CalendarApp = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </Provider>
    );
};
