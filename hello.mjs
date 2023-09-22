import express from 'express';
import cors from 'cors';
import path from 'path';
const app = express();
const __dirname =path.resolve();

app.use(cors())
app.get('/historicalplaces/:cityName', (req, res) => {
    console.log("This is My Historical Places ", new Date());

    let historicalData = {
        karachi:{
           city: "Karachi",
           top1: "1. Mohatta Palace Museum",
           top1info: "Our first stop in Karachi is the Mohatta Palace Museum, distinctive for its Pink Jodhpur structure and Indo-Saracenic architecture. It was built in 1927 as the summer home of Shivratan Chandraratan Mohatta, a prominent Hindu Marwari mogul. Today, Mohatta Palace Museum holds a great number of treasures, from rare maps to Makli monuments that date back to thousands of years ago.",
           top2:"2. Chaukhandi Tombs",
           top2info:"From the seaside town of Clifton, make your way to Landhi Town to view the intricate Chaukhandi Tombs. Made of carved sandstone, these tombs are believed to have originated between the 15th and 18th centuries as an Islamic cemetery. Today, it’s a design marvel with a twist- the Chaukhandi Tombs are also regarded as one of the most haunted places in Pakistan.",
           top3:"3. Frere Hall",
           top3info:"Take a trip to Karachi’s British Colonial past by visiting Frere Hall, a Venetian-Gothic building that dates back to 1865. Frere Hall is one of Karachi’s most iconic structures and inside, you’ll find the beautiful mural painted by Sadequain Naqqash, one of Pakistan’s most revered artists. His painting almost rivals Michaelangelo’s work at the Sistine Chapel.",
           top4:"4. Quaid-e-Azam House Museum",
           top4info:"Also known as the Flagstaff House, the Quaid-e-Azam House Museum holds a special place in Pakistani history. After all, it was the home of Quaid-e-Azam Mohammad Ali Jinnah, Pakistan’s founding father. The house is now a museum where you can view some of the furnishings used by Jinnah and his sister, as well as archaeological finds.",
           top5:"5. Khaliq Deena Hall and Library",
           top5info:"Khaliq Deena Hall and Library (also known as Khalikdina Hall) is both a cultural and architectural treasure. Built in 1906, it was used by British India as a court. For years, the Khaliq Deena Hall and Library was abandoned to waste, but thanks to local historical preservation projects, it is now a protected site.",
        },
        lahore:{
            city: "Lahore",
           top1: "1. Badshahi Mosque",
           top1info: "Badshahi Mosque Lahore is considered to be one of the most important historical places in Pakistan. It is the epitome of magnificent Mughal architecture and design. It was built around 1673 and it is also the second-largest mosque in Pakistan. Lahore has some of most famous architects. The structure consists of red sandstone carvings which were hugely inspired by Indo Greek architecture and design. The marble flooring and great attention to detail in the walls add more beauty to the place. Every day hundreds of people gather at the beautiful mosque to offer prayers. You can visit the mosque every day between 8 AM to 8 PM.",
           top2:"2. Lahore Fort",
           top2info:"Lahore Fort was the residence of Mughal emperors in ancient times. It is also a UNESCO protected site, owing to its historical significance. The fort became popular during the reign of Akbar but its presence dates back to the 11th century. To see the true and beautiful colors of Pakistan, one has to visit Lahore. If you want to experience the majesty and mystery of the fort, take a walk in its garden while the sun is setting. After visiting the fort, do not forget to pay a visit to the Mughal museum, armory gallery, Sheesh Mahal and the Sikh museum. ",
           top3:"3. Ali Hajvery’s Tomb",
           top3info:"The next famous historical place on our list is Ali Hajvery’s tomb. If you are interested in Sufism and want to know more about the Sufi saints of Lahore, try visiting this place. People claim that Ali Hajveri was a renowned Sufi saint of the subcontinent who lived in Lahore until the 11th century. He had several Muslim and nonmuslim followers. There are many things to do in Lahore. Every day hundreds of people visit the tomb and offer prayers, give money, and put flowers next to the tomb.",
           top4:"4. Samadhi of Ranjit Singh",
           top4info:"It is an 18th-century building that has the funerary urns of the Sikh ruler Ranjit Singh who died in 1839. The samadhi is located right next to the famous Lahore Fort and Badshahi Mosque. The building is the epitome of Hindu, Islamic, and Sikh architecture, design, symbolism, and motifs. The building is composed of gilded fluted domes and cupolas. The front side of the building has a doorway which is decorated with the images of Ganesh, Devi, and Brahma. The wooden panels on the ceiling are decorated with stained glass work, while the walls are richly decorated with floral designs. The ceilings are decorated with glass mosaic work.  Lahore is famous for its diverse food culture. From continental to desi food restaurants, Lahore has some of best hi-tea places where people can enjoy food.",
           top5:"5. Miani Sahib Graveyard",
           top5info:"The Miani Sahib Graveyard is considered to be the largest burial ground in Lahore. It is located in the heart of Lahore. The graveyard dates back to the Mughal times which means it is one of the oldest graveyards in the country. The graveyard covers an area of 1,206 kilometers square (60 hectares, 149 acres) and has a capacity of approximately 300,000 graves. You can visit the city in summers as there are top luxurious pools in Lahore to chill in summers.",
        },
        faislabad:{
            city: "Faislabad",
           top1: "1. Lyallpur Museum",
           top1info: "This museum is one of the top leading heritage museums in Pakistan. Lyallpur Museum in Faisalabad consists of ten different galleries. In these galleries, all objects are displayed in order. Different school students from Faisalabad come here to do a study tour. ",
           top2:"2. Aqualand Water Park",
           top2info:"Aqualand was established near Kashmir pull on the west canal road in Faisalabad. This swimming pool is the best place for enjoyment in Faisalabad. During the time of the swimming period, good and foolproof security is provided by the administration. Well maintained canteen established in the Water park area. This place is not for the family only male members of the family or friends can enter there.",
           top3:"3. Nusrat Fateh Ali Khan Auditorium",
           top3info:"The Auditorium is the part of a public building where people sit, as distinct from the stage. One side is for the audience sitting and the opposite side is a stage, where different activities are done which are dependent on the event. The walls and ceiling of the auditorium normally include hidden light and soundproofing, as well as air extracts or inlets, and may be ornately designed. This Auditorium has a seating capacity of 5500 people for each event hosted there. This Auditorium is located next to Mai di Jhuggi.",
           top4:"4. Ghanta Ghar Faisalabad",
           top4info:"Since the British Raj, this clock tower has been one of the oldest structures in the city. One of the most attractive features of this building is that it is standing in the centre of the eight markets. It is so breathtaking looking. These Bazar are known as The Eight bazaars of Faisalabad. ",
           top5:"5. Gumti Fountain",
           top5info:"This Water Fountain is a British Raj-era landmark in Faisalabad, Pakistan. It was erected in the early 1800s and served as a common gathering space for city residents for local town meetings. The construction is still standing today and has been converted into a traffic roundabout with a functioning water fountain in the centre.",
        },
        rawalpindi:{
            city: "Rawalpindi",
           top1: "1. Ayub National Park",
           top1info:"Ayub National Park, also known as Ayubia, is a protected area of 3,312 hectares in Abbottabad District, Khyber Pakhtunkhwa province of Pakistan. It was declared a national park in 1984. The park is named after Muhammad Ayub Khan, the second President of Pakistan. The park is located at an altitude of 2,134 meters and covers an area of 4.6 square kilometers. The park includes the towns of Murree, Nathiagali, Ayubia, and Ghora Gali. There are over 30 species of mammals and more than 200 species of birds in the park. The park is a popular tourist destination and receives over 1 million visitors every year.",
           top2:"2. Joyland Rawalpindi",
           top2info:"Joyland Rawalpindi is one of the most popular amusement parks in Pakistan. It is located in the city of Rawalpindi, in the Punjab province. The park is spread over an area of ​​approximately 20 acres and has a wide variety of rides and attractions for all ages. Joyland is a great place to enjoy a day out with family and friends. There are a number of food stalls and restaurants in the park, so you can have a delicious meal while enjoying the rides. ",
           top3:"3. Jinnah Park",
           top3info:"Jinnah Park Rawalpindi is one of the oldest and most popular parks in the city. It is located in the heart of the city and is a favorite spot for locals and tourists alike. The park has a wide variety of flowers and trees and is a great place to relax and enjoy the scenery.",
           top4:"4. Rawalpindi Cricket Stadium",
           top4info:"Rawalpindi Cricket Stadium is a cricket ground in Rawalpindi, Pakistan. It was established in 1992 and has a capacity of 25,000. The ground is home to the Rawalpindi Cricket Club and has hosted Test matches, One Day Internationals and Twenty20 Internationals. The Rawalpindi Cricket Stadium was established in 1992 and has a capacity of 25,000. The ground is home to the Rawalpindi Cricket Club and has hosted Test matches, One Day Internationals and Twenty20 Internationals. The ground has a rich history, having hosted some of Pakistan's most famous victories, including the 1992 World Cup semi-final against New Zealand. More recently, the ground was the scene of Pakistan's dramatic victory over India in the 2007 Twenty20 World Cup.",
           top5:"5. Rawal Lake",
           top5info:"Rawal Lake is a man-made reservoir that provides water to the city of Rawalpindi, Pakistan. The lake was created in 1878 by the British Raj, who dammed the Kurang River to store water for the growing Cantonment area. Rawal Lake is an important bird habitat and is home to a number of migratory birds, as well as being a popular spot for picnicking and boating. The lake is also a source of drinking water for Rawalpindi and Islamabad.",
        },
        gujranwala:{
            city: "Gujranwala",
           top1: "1. Ranjeet Singh Haveli",
           top1info:"Maharaja Ranjit Singh (Lion of Punjab) is the most prominent ruler of Punjab. This structure is approximately 236 Years Old. Gujranwala's Ranjeet Singh Haveli is located on the corner of Fish Market. The building is in terrible condition because of the lack of government intrigue. Still, this location has shown the great architecture of that time. ",
           top2:"2. Fun Dunya Amusement Park",
           top2info:"Fun Duniya is a brand-new addition to Gujranwala's Fun Land. It is the most appealing location for children and teenagers. It draws the majority of families to the neighbourhood, and Fazal Centre's business has increased by 500 percent since the launch of Fun Duniya. Because it is a one-of-a-kind attraction with a variety of rides including trains, cup rides, racing cars, and other amusements. Fun Dunya park's entry is free, but other things such as food, attractions, and play area are not free you should pay for them.",
           top3:"3. Nishan e Manzil",
           top3info:"Nishan Manzil is situated in the Gujranwala cantonment almost 15 miles from the main city. Moreover, it is in reality the cleanest Place in this industrial city. Furthermore, across the road, there is a Jogging track. This place is very beautiful, old and famous among the tourist who comes here from across the world. ",
           top4:"4. Temple of Toomri",
           top4info:"Gujranwala is a historic city with many historical sites to see. One of the places is Toomri Temple. This is a Baba Sai Das mandir, which was a Vishnu symbol. Prior to the partition, large social festivals were held here, and the location has a significant role in Hindu mythology. ",
           top5:"5. Abdul Nabi Khan Mausoleum",
           top5info:"The Abdul Nabi Khan Mausoleum rises gracefully from the meadows about a half kilometre northeast of the town of Kotli Maqbara. It was likely constructed in the era of Shah Jehan, but no definitive historical evidence links it to any particular person. ",
        },
        peshawar:{
            city: "Peshawar",
           top1: "1. Sethi House",
           top1info:"Sethi House is located near twelve famous Havelis in the old city of Peshawar, all of which were built in the nineteenth century. The frequented Sethi Haveli was built in 1884 and is owned by the Sethi family, wealthy businessmen with operations in South and Central Asia. Haveli showcases Central Asian design inspired by the architecture of Bukhara, Uzbekistan. Visitors can admire stained glass windows, intricate wood carvings, and a basement area.",
           top2:"2. Chowk Yadgar",
           top2info:"Chowk Yadgar is one of the most famous places in Peshawar, located in the heart of the old city. The monument was originally built in 1892 to honour General Hastings but was later dedicated to the victims of the 1930 Qissa Khwani Bazaar massacre. In the years since this Peshawar landmark has become a popular spot for religious and political gatherings, but most of the time, it's just a picnic spot. Surrounded by many alleys, Chowk Yadgar is a relaxing stop while exploring the ancient city of Peshawar. There are several old-school Havelis in the area, many of which are just a short walk from Chowk Yadgar. Due to the busy nature of the area, driving by yourself is not recommended at all. Taking a taxi or rickshaw to the area is the best way to see this famous place in Peshawar.",
           top3:"3. Mahabat Khan Mosque",
           top3info:"No trip to Peshawar is complete without seeing the ravishing yet historic) Mahabat Khan Mosque. Reflecting the famous Mughal-era architecture, this 17th-century mosque in the narrow meandering depths of the old city is in relatively good condition despite its age. The famous mosque was built by the Mughal rulers of Peshawar and has a white marble facade. The interior is impressive, consisting of countless colourful murals and various floral patterns. The interior design of Mahabat Khan is enthralling. The best view of Mahabat Khan is from above, which can be seen when running to the correct caretaker. It's no secret that spending time visiting this Mughal masterpiece is one of the best things to do in Peshawar, even if you don't quite get a bird's eye view.",
           top4:"4. Peshawar Museum",
           top4info:"If you tell someone you are visiting the capital of the KPK, they will undoubtedly tell you to visit the Peshawar Museum. Because this famous place in Peshawar is epic. Established in 1907, the museum is known for its outstanding collection of ancient Gandhara Buddhist art. Featuring Buddhist sculptures, statues, and other objects, the museum is surprisingly considered to have one of the largest collections of Buddhist objects in the world. In ancient times, Buddhism flourished in KPK, and this historical place perfectly reflects that.",
           top5:"5. Baab e Khyber",
           top5info:"Khyber Pass Gate is a famous monument located at the entrance to the famous Khyber Pass. The Khyber Pass was an integral part of the ancient Silk Road, linking Pakistan and Afghanistan. The memorial is about 15 kilometres from Peshawar, but trust me, it's worth a visit. Moreover, Karkhano Market is famous for its variety of contraband and is very close to Bab e Khyber, making it a fun place to visit on your way to and from the memorial."
        },
        multan:{
            city:"Multan",
            top1: "1. Tomb of Shah Rukn e Alam",
            top1info:"Sheikh Rukn-ud-Din Abul Fateh, also known as Shah Rukn-e-Alam is one of the most famous Sufi saints of Multan. He was a mystic who belonged to the Suhrawardiyya Sufi order. Every year, over 100,000 pilgrims from all over the world visit the shrine. Shah Mehmood Qureshi, the foreign minister of the recent government is the current Sajjada Nashin and custodian of the shrine. The tomb is situated at the heart of Multan. It was constructed between 1320-1324 CE. Historians suggest that the tomb was built by the famous Ghias-ud-Din Tughlak, Governor of Depalpur. In the 1970s the tomb was renovated by the department of Auqaf. The tomb received a fresh makeover by the Kashigars of Multan. The brown historical building decorated with blue stones is the epitome of ancient Mughal architecture. ",
            top2:"2. Tomb of Shah Gardez",
            top2info:"Another famous Sufi mystic who is buried in Multan is Shah Yousuf Gardezi. His tomb is situated about 600 meters southwest of the former fort of Multan. The tomb consists of a small cubical building with a flat roof, decorated on all sides with blue and white glazed tiles embellished with floral patterns and aina-Kari mirror-work on the interior. Yousaf Gardezi is known for his immense work for the revival of Islam in the subcontinent. ",
            top3:"3. Multan Fort",
            top3info:"The Multan Fort is an ancient landmark of South Asian Defence and Architecture. Some historians suggest that the fort was built between 800 to 1000 BC. The fort was constructed by the Katoch Dynasty but the fort received grave destruction by the British Empire during colonial rule. The gigantic fort is truly a work of art. It has huge walls that are 40 to 70 feet (21 m) high and 6,800 feet (2 km) in circumference. The fort’s 46 bastions included two flanking towers at each of the four gates.",
            top4:"4. Ghanta Ghar, Multan",
            top4info:"The famous clock tower of Multan, also known as the Ghanta Ghar is one of the main tourist attractions in Pakistan. It was built around 1884 AD during the British Raj. The construction of the Ghanta Ghar started in February 1884 and it took four years to complete the construction. Interestingly, the foundation of the Ghanta Ghar is based on the ruins of Haveli of Ahmad Khan Sadozai which was destroyed during the Siege of Multan. The hall and the building were called Ripon Hall and Building but after independence, the place was named “Jinnah Hall’. Initially, the building was used for office meetings and cultural programs. If you want to see the hustle and bustle of the city, you should visit the Ghanta Ghar Multan. There shopping malls around the Ghanta Ghar that sell traditional Multani things such as Ajrak and clay pottery.",  
            top5:"5. Bibi Pak Daman Mausoleum",
            top5info:"Bibi Pak Daman, famously known as Bibi Rasti was the mother of the renowned Rukn-i-Alam. She was also a student of Bahauddin Zakariya and did a lot of work for the revival of Islam in Multan. She was buried near the ancient temple of Mai Totla. The tomb is rectangular in shape and is heavily decorated with the blue and white stonework, a signature style of Multan’s architecture. The east facade is decorated with a set of triple arches resting upon double columns, providing access to a deep portico that shelters several graves. The tomb stands at the center of a compound made up of thick walls. The tomb also includes a domed gatehouse. Many people from Multan and its adjacent areas come and pay their respect at the tomb",
        },
    }

    let userInputCityName = req.params.cityName.toLowerCase();
    console.log(userInputCityName);
    let historicalDataToSend = historicalData[userInputCityName];
    if(historicalDataToSend){
        res.send(historicalDataToSend)
    }else{
        res.send(`Historical data not found for ${req.params.cityName}`);
        console.log(`Historical data not found for ${req.params.cityName}`)
    }
})

app.use('/', express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})