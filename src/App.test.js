import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import SearchBox from './components/SearchBox/SearchBox';
import FiltersList from './components/FiltersList/FiltersList';

describe('on page load', () => {
    it('should render a heading', () => {
        render(<App />)
        const heading = screen.getByText('Punk API');
        expect(heading).toBeInTheDocument();
    });

    it('should render a search box', () => {
        render(<SearchBox />)
        const searchBox = screen.getByPlaceholderText('Search by name');
        expect(searchBox).toBeInTheDocument();
    })

    it('should render three filters', () => {
        render(<App />)
        const filter1 = screen.getByText('High ABV (> 6.0%)');
        const filter2 = screen.getByText('Classic Range');
        const filter3 = screen.getByText('Acidic (Ph < 4)');

        expect(filter1).toBeInTheDocument();
        expect(filter2).toBeInTheDocument();
        expect(filter3).toBeInTheDocument();
    })

    it('should render a list of cards', () => {
        render(<App />)
        const cards = screen.getAllByText('card');
        expect(cards).toBeInTheDocument();
    })
})