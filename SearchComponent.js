// SearchComponent.js
import { LightningElement } from 'lwc';
import fetchData from '@salesforce/apex/SearchComponentController.fetchData';

export default class SearchComponent extends LightningElement {
    searchKey = '';
    apiFilter = '';
    handleInputChange(event) {
        // Update searchKey value on input change
        this.searchKey = event.target.value;
        this.debounceSearch();
    }

    @wire(fetchData, { apiFilter: '$apiFilter' })
    wiredData({ error, data }) {
        if (data) {
            // Process fetched data
        } else if (error) {
            // Handle error
        }
    }

    debounceSearch() {
        if (this.debounceTimeout) {
            clearTimeout(this.debounceTimeout);
        }
        // Debounce API call by 1500ms
        this.debounceTimeout = setTimeout(() => {
          // Update the api search filter once each 1.5 seconds
          this.apiFilter = this.searchKey;
        }, 1500);
    }
}
