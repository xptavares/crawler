# Crawler

Crawler For hotels

## Installation

```
git clone git@github.com:xptavares/crawler.git
cd crawler
npm install
```

## Run

```
npm start
```

#### POST
post to localhost:3000/buscar
with body:
```
{
	"checkin": "25/12/2019",
	"checkout": "01/01/2020"
}
```

result:
```
{
    "success": true,
    "data": [
        {
            "name": "Standard",
            "thumb": "https://myreservations.omnibees.com/Handlers/ImageLoader.ashx?sz=250x166&imageID=189952.jpg",
            "description": "Ideal para relaxar. Os quartos dispõem de diversos serviços para garantir uma estadia confortável e agradável. Todos os apartamentos Stan... ",
            "price": "R$ 1.197,71"
        },
        {
            "name": "Luxo",
            "thumb": "https://myreservations.omnibees.com/Handlers/ImageLoader.ashx?sz=250x166&imageID=152620.jpg",
            "description": "Confortavelmente decorado para fazer da sua estadia um momento de prazer e bem-estar. Os quartos da categoria Luxo contam Ar climatizado,... ",
            "price": "R$ 1.283,43"
        },
        {
            "name": "Luxo Superior",
            "thumb": "https://myreservations.omnibees.com/Handlers/ImageLoader.ashx?sz=250x166&imageID=152623.jpg",
            "description": "Exclusividade e requinte. Todos os quartos luxo superior contam com Ar climatizado, TV LCD 32”, SKY, frigobar, telefone, cofre e secador ... ",
            "price": "R$ 1.427,14"
        },
        {
            "name": "Master",
            "thumb": "https://myreservations.omnibees.com/Handlers/ImageLoader.ashx?sz=250x166&imageID=192355.jpg",
            "description": "São 6 quartos luxuosos, sofisticados e decorados com requinte, além de localização privilegiada em nosso hotel. Alguns possuem mezanino e... ",
            "price": "R$ 1.647,14"
        }
    ]
}
```

## Test
```
npm run test
```

## Doc

[apidoc](https://github.com/xptavares/crawler/blob/master/doc/index.html)
