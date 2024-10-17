import { Component, OnInit } from '@angular/core';
import { CountryService } from './table.service';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  countries: any[] = [];
  page: number = 1; 
  itemsPerPage: number = 5;
  filteredCountries: any[] = []; 
  populationData: ChartData<'bar'> = {
    labels: [],
    datasets: [
      {
        label: 'População por Região',
        data: [],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };
  searchName: string = ''; 
  isLoading: boolean = true;

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.countryService.getCountries().subscribe(
        (data) => {
          this.countries = data;
          this.filteredCountries = data;
          this.preparePopulationData();
          this.isLoading = false; 
        },
        (error) => {
          console.error('Erro ao carregar os países:', error);
          this.isLoading = false;
        }
      );
    }, 2000); 
  }

  preparePopulationData() {
    const regionPopulation: { [key: string]: number } = {};

    this.countries.forEach((country) => {
      const region = country.region;
      const population = country.population;

      if (!regionPopulation[region]) {
        regionPopulation[region] = 0;
      }
      regionPopulation[region] += population;
    });

    this.populationData.labels = Object.keys(regionPopulation);
    this.populationData.datasets[0].data = Object.values(regionPopulation);
  }

  searchCountryName(): void {
    if (this.searchName) {
      this.filteredCountries = this.countries.filter(country =>
        country.name.common.toLowerCase().includes(this.searchName.toLowerCase())
      );

      if (this.filteredCountries.length === 0) {
        console.error('Nenhum país encontrado.');
      }
    } else {
      this.filteredCountries = this.countries;
    }
  }
}
