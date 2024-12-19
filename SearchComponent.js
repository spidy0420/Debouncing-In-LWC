// SearchComponent.js
import { LightningElement } from 'lwc';

export default class SearchComponent extends LightningElement {
    searchTerm = '';

    // Called when the component is initialized
    connectedCallback() {
        // Bind the debounced search function
        this.handleSearchDebounced = this.debounce(this.handleSearch, 300);
    }

    // Handles input change and triggers debounced search
    handleInputChange(event) {
        this.searchTerm = event.target.value;
        this.handleSearchDebounced();
    }

    // Debounce function to limit search execution frequency
    debounce(func, delay) {
        let timeoutId;
        return (...args) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func.apply(this, args);
            }, delay);
        };
    }

    // Your search logic
    handleSearch() {
        console.log('Searching for:', this.searchTerm);
        // Add search logic here
    }
}
