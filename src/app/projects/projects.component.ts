import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  Pollachi_title: string = 'Rooftop Fabrication Project,Pollachi,Coimbatore';
  Pollachi_description: string = 'This rooftop fabrication project located in Pollachi features a sturdy, custom-designed metal structure built for durability and elegance. The design ensures maximum ventilation and protection, blending seamlessly with the tropical surroundings. Ideal for both residential and semi-commercial spaces, this rooftop enhances outdoor living while offering long-term weather resistance.';

  Pollachi_images = [
    { imageUrl: './images/Pollachi_1.jpg', altText: 'Front View' },
    { imageUrl: './images/Pollachi_2.jpg', altText: 'Side View' },
    { imageUrl: './images/Pollachi_3.jpg', altText: 'Interior Design'},
    { imageUrl: './images/Pollachi_4.jpg', altText: 'Interior Design'},
    { imageUrl: './images/Pollachi_5.jpg', altText: 'Interior Design'},
    { imageUrl: './images/Pollachi_6.jpg', altText: 'Interior Design'},
    { imageUrl: './images/Pollachi_7.jpg', altText: 'Interior Design'}
  ];
  Vadavalli_title: string = 'Structural Staircase and Railing Project, Vadavalli,Coimbatore';
  Vadavalli_description: string = 'Located in Vadavalli, Coimbatore, this project features a beautifully crafted steel staircase and railing system designed for a premium resort property. Combining strength with style, the structure provides safe access while enhancing the overall modern architecture. Built with high-quality materials, the design ensures durability, safety, and a sleek visual appeal that complements the scenic surroundings.';

  Vadavalli_images = [
    { imageUrl: './images/Vadavalli_1.jpg', altText: 'Front View' },
    { imageUrl: './images/Vadavalli_2.jpg', altText: 'Side View' },
    { imageUrl: './images/Vadavalli_3.jpg', altText: 'Interior Design'},
    { imageUrl: './images/Vadavalli_4.jpg', altText: 'Interior Design'},
    { imageUrl: './images/Vadavalli_5.jpg', altText: 'Interior Design'},
  ];
  Kalapatti_title: string = 'Residential Tiled Elevation Work, Kalapatti, Coimbatore';
  Kalapatti_description: string = 'This elegant residential project in Kalapatti, Coimbatore showcases expertly executed tiled elevation work. Designed to enhance the building’s contemporary look, the project features premium exterior tiles, creating a stylish and durable facade. The combination of textures and neutral tones brings a modern charm to the structure, blending functionality with sophisticated aesthetics.';

  Kalapatti_images = [
    { imageUrl: './images/Kalapatti_2.jpg', altText: 'Front View' },
    { imageUrl: './images/Kalapatti_1.jpg', altText: 'Side View' },
  ];

  Hopes_title: string = 'Rooftop and Side Wall Development, Hopes, Coimbatore';
  Hopes_description: string = 'Located in the vibrant area of Hopes, Coimbatore, this project features an elegantly designed rooftop with intricate tile flooring and a stylish protective canopy. The side walls are neatly finished with premium-quality paintwork and structural design enhancements, offering both beauty and durability. Perfectly blending functionality and aesthetics, this space creates an ideal outdoor area for relaxation and gatherings, while adding value to the property.';

  Hopes_images = [
    { imageUrl: './images/Hopes_4.jpg', altText: 'Front View' },
    { imageUrl: './images/Hopes_1.jpg', altText: 'Side View' },
    { imageUrl: './images/Hopes_2.jpg', altText: 'Side View' },
    { imageUrl: './images/Hopes_3.jpg', altText: 'Side View' },
  ];

  Cheran_ma_Nagar_title: string = 'Roof Tile Installation, Cheran Ma Nagar, Coimbatore';
  Cheran_ma_Nagar_description: string = 'Situated in the peaceful neighborhood of Cheran Ma Nagar, Coimbatore, this project showcases a beautifully crafted roof tile installation. The traditional patterned tiles combined with a sturdy steel frame and elegant pillar support bring a perfect blend of durability and classic aesthetics. Designed to withstand diverse weather conditions, the roofing enhances both the beauty and strength of the terrace, creating a stylish and functional outdoor living space.';

  Cheran_ma_Nagar_images = [
    { imageUrl: './images/Cheranma nagar_2.jpg', altText: 'Front View' },
    { imageUrl: './images/Cheranma nagar_1.jpeg', altText: 'Side View' },
    { imageUrl: './images/Cheranma nagar_3.jpeg', altText: 'Side View' },
  ];

  Bodipalayam_title: string = 'Roof Tile Installation, Bodipalayam, Coimbatore';
  Bodipalayam_description: string = 'Located in the serene outskirts of Bodipalayam, Coimbatore, this roofing project features a meticulously arranged tile roof that combines traditional charm with modern durability. The high-quality terracotta tiles are installed with precision to ensure excellent protection against heat and rain, while also enhancing the building’s aesthetic appeal. Set against a lush green backdrop, this sturdy and beautiful roofing solution reflects perfect craftsmanship and thoughtful design.';

  Bodipalayam_images = [
    { imageUrl: './images/Podipalayam_3.jpg', altText: 'Front View' },
    { imageUrl: './images/Podipalayam_1.jpg', altText: 'Side View' },
    { imageUrl: './images/Podipalayam_2.jpeg', altText: 'Side View' },
  ];


}
