import { Component, OnInit, WritableSignal, signal } from '@angular/core';
import { Card } from 'src/app/shared/services/card';;
import {ActivatedRoute, ParamMap} from "@angular/router"
import { AuthService } from 'src/app/shared/services/auth';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  tShirts: Card[] = [
    {
        title: "Yellow Polo T-Shirt",
        price: 799,
        rating: 4.8,
        productMake: "Polo Plus",
        type: "T-Shirt",
        imageLink: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/a/j/z/xxl-pc-polo-ylw-polo-plus-original-imagp6hzvxjvmeh4.jpeg?q=70"
    },
    {
        title: "Navy Blue Printed T-Shirt",
        price: 699,
        rating: 4.5,
        productMake: "TQH",
        type: "T-Shirt",
        imageLink: "https://rukminim2.flixcart.com/image/832/832/k6jnfrk0/t-shirt/7/u/y/m-poly-511-12-14-tqh-original-imafzz5cf2v6fywv.jpeg?q=70"
    },
    {
        title: "Mickey Mouse Graphic T-Shirt",
        price: 899,
        rating: 4.6,
        productMake: "Veirdo",
        type: "T-Shirt",
        imageLink: "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/u/1/v/s-mickey-3008-veirdo-original-imagztersutxahxw.jpeg?q=70"
    },
    {
        title: "Olive Green Round Neck T-Shirt",
        price: 599,
        rating: 4.3,
        productMake: "Tripr",
        type: "T-Shirt",
        imageLink: "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/5/b/r/s-tblwt-ogrwtrnfull-d69-tripr-original-imagqhggcghngzwv.jpeg?q=70"
    },
    {
        title: "Black Graphic Print T-Shirt",
        price: 749,
        rating: 4.7,
        productMake: "Unknown Brand",
        type: "T-Shirt",
        imageLink: "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/t/5/2/-original-imaguyfa7vdqfyuj.jpeg?q=70"
    },
    {
        title: "Blue and Red Striped T-Shirt",
        price: 899,
        rating: 4.4,
        productMake: "Blive",
        type: "T-Shirt",
        imageLink: "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/u/g/o/xxl-bbr-blrnful-z62-blive-original-imagruewxurf44fz.jpeg?q=70"
    },
    {
        title: "White Printed T-Shirt",
        price: 799,
        rating: 4.6,
        productMake: "Ausk",
        type: "T-Shirt",
        imageLink: "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/r/v/k/m-ausk0165-ausk-original-imaghu9fbhcgf2za.jpeg?q=70"
    },
    {
        title: "Black and White Striped T-Shirt",
        price: 649,
        rating: 4.2,
        productMake: "Vebnor",
        type: "T-Shirt",
        imageLink: "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/p/j/c/s-ts12-vebnor-original-imagp6jcsgekgda4.jpeg?q=70"
    },
    {
        title: "Wild West Graphic T-Shirt",
        price: 749,
        rating: 3.5,
        productMake: "Wild West",
        type: "T-Shirt",
        imageLink: "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/8/h/1/xl-ft-sm458-wild-west-original-imagtmuteruhzp5c.jpeg?q=70"
    }
];

    shirts: Card[] =  [
        {
            title: "Men's Classic Fit Shirt",
            price: 9232,
            rating: 3.5,
            productMake: "Adidas",
            type: "Shirt",
            imageLink: "https://m.media-amazon.com/images/I/71On2XSPuRL._UY879_.jpg"
        },
        {
            title: "White Formal Shirt",
            price: 5999,
            rating: 4.2,
            productMake: "Armani",
            type: "Shirt",
            imageLink: "https://imagescdn.thecollective.in/img/app/product/8/862670-10195835.jpg?"
        },
        {
            title: "Casual Checkered Shirt",
            price: 3499,
            rating: 3.0,
            productMake: "Tommy Hilfiger",
            type: "Shirt",
            imageLink: "https://m.media-amazon.com/images/I/71MaGTXl7ML._UY879_.jpg"
        },
        {
            title: "Slim Fit Striped Shirt",
            price: 4799,
            rating: 4.3,
            productMake: "Hugo Boss",
            type: "Shirt",
            imageLink: "https://thehouseofrare.com/cdn/shop/products/IMG_0268_0d3b52bc-60a0-45e6-aa90-6bbdc0887ed5_1000x.jpg?v=1671640610"
        },
        {
            title: "Denim Shirt",
            price: 2999,
            rating: 3.1,
            productMake: "Levi's",
            type: "Shirt",
            imageLink: "https://m.media-amazon.com/images/I/61KIViYc9wL.jpg"
        },
        {
            title: "Printed Short Sleeve Shirt",
            price: 2399,
            rating: 4.4,
            productMake: "Polo Ralph Lauren",
            type: "Shirt",
            imageLink: "https://m.media-amazon.com/images/I/41sjueSx-2L.jpg"
        },
        {
            title: "Classic Plaid Shirt",
            price: 2599,
            rating: 4.2,
            productMake: "Calvin Klein",
            type: "Shirt",
            imageLink: "https://m.media-amazon.com/images/I/61vMfbAQdSL._UX679_.jpg"
        }
    ]

    pants: Card[] =  [
        {
            title: "Men's Formal Trousers",
            price: 3499,
            rating: 3.3,
            productMake: "Adidas",
            type: "Pants",
            imageLink: "https://m.media-amazon.com/images/I/61go4LL2vSL._UX679_.jpg"
        },
        {
            title: "Slim Fit Casual Pants",
            price: 2599,
            rating: 4.2,
            productMake: "Armani",
            type: "Pants",
            imageLink: "https://m.media-amazon.com/images/I/61iC0gK1HbL._UX679_.jpg"
        },
        {
            title: "Classic Khaki Pants",
            price: 1899,
            rating: 3.0,
            productMake: "Tommy Hilfiger",
            type: "Pants",
            imageLink: "https://m.media-amazon.com/images/I/6199IApMsyL._UX679_.jpg"
        },
        {
            title: "Business Formal Slim Fit Pants",
            price: 3999,
            rating: 4.4,
            productMake: "Hugo Boss",
            type: "Pants",
            imageLink: "http://5.imimg.com/data5/ECOM/Default/2023/6/317046829/MM/CE/SL/9422220/all-match-dark-grain-business-formal-pants-for-men-slim-fit-casual-suit-pants-camel-31-263-1000x1000.jpg"
        },
        {
            title: "Men's Formal Trouser",
            price: 2999,
            rating: 4.1,
            productMake: "Levi's",
            type: "Pants",
            imageLink: "https://5.imimg.com/data5/TM/ZU/KJ/SELLER-23336766/mens-formal-pant-1000x1000.jpg"
        },
        {
            title: "Slim Fit Formal Pants",
            price: 3299,
            rating: 4.5,
            productMake: "Calvin Klein",
            type: "Pants",
            imageLink: "https://5.imimg.com/data5/DU/RC/MY-3068469/men-s-formal-pant-500x500.jpg"
        }
    ];
    
    cards: WritableSignal<Card[]> = signal(this.shirts.concat(this.tShirts).concat(this.pants));
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
        const id = params.get('id');
    if(id === "shirts") this.cards.set(this.shirts);
        else if (id == "tshirts") this.cards.set(this.tShirts);
        else if(id==="pants") this.cards.set(this.pants);
    })  
  } 

  constructor(public route: ActivatedRoute) {}


  Starfill(data: Card): number[]{
        return new Array(Math.floor(data.rating)).fill(0)
  }


}
