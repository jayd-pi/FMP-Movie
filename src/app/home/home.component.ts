import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  trendingMovies: any;
  theatreMovies:any;
  popularMovies: any;

  constructor(private http: HttpClient, private router: Router){ }

  ngOnInit(): void {
    this.getTrendingMovies()
    this.getThreatreMovies()
    this.getPopularMovies()
  }
    getTrendingMovies(){
      this.http.get('http://localhost:4200/assets/data/trending-movies.json').subscribe((movies) =>{
        this.trendingMovies = movies;
        console.log(movies);

      })
  }
    getThreatreMovies(){
    this.http.get('http://localhost:4200/assets/data/theatre-movies.json').subscribe((data) =>{
      this.theatreMovies = data;
      console.log(data);
    })
  }
  getPopularMovies(){
    this.http.get('http://localhost:4200/assets/data/popular-movies.json').subscribe((data) =>{
      this.popularMovies = data;
      console.log(data);
    })
}
  goToMovie(type:string, id:string){
    this.router.navigate(['movie', type, id])
  }
}
