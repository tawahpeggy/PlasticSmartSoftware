import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

blogs: Blog[] = [];

constructor() {
  // Initialize the blogs array with sample data
  this.blogs = [
    {
      title: 'Plastic Pollution Awareness: Educating and Engaging Communities',
      description: 'Plastic pollution has become an alarming global issue, posing a significant threat to our environment and ecosystems.....',
      image: '../../../assets/pollution.jpg',
      link: 'asdjjf'
    },
    {
      title: '"Microplastics: The Hidden Threat to Our Environment"',
      description: 'In recent years, the pervasive presence of microplastics in our environment has emerged as a silent but potent threat.....',
      image: '../../../assets/pollution2.jpg',
      link: 'asdjjf'

    }, {
      title: 'Blog 1',
      description: 'This is the first blog',
      image: '../../../assets/pollution3.jpg',
      link: 'asdjjf'

    },
    {
      title: 'Blog 2',
      description: 'This is the second blog',
      image: 'path-to-image-2.jpg',
      link: 'asdjjf'

    }
  ];
}

ngOnInit(): void {
}

}

interface Blog {
title: string;
description: string;
image: string;
link: string;
}

