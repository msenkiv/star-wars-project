import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'star-wars-project';
  items = [
    {
      title: 'Item 1',
      image: 'https://via.placeholder.com/300x200',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      title: 'Item 2',
      image: 'https://via.placeholder.com/300x200',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Item 3',
      image: 'https://via.placeholder.com/300x200',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    },
    {
      title: 'Item 4',
      image: 'https://via.placeholder.com/300x200',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
    },
    {
      title: 'Item 5',
      image: 'https://via.placeholder.com/300x200',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.',
    },
    {
      title: 'Item 6',
      image: 'https://via.placeholder.com/300x200',
      description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
    },
    {
      title: 'Item 7',
      image: 'https://via.placeholder.com/300x200',
      description: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam.',
    },
    {
      title: 'Item 8',
      image: 'https://via.placeholder.com/300x200',
      description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.',
    },
    {
      title: 'Item 9',
      image: 'https://via.placeholder.com/300x200',
      description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit.',
    }
  ];

}
