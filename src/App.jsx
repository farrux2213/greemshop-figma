import Card from "./Card";
import "./App.css";
import image1 from "/image1.svg";

function App() {
  return (
    <div className="allFlowers">
      <div className="qator1">
        <Card
          title="Barberton Daisy"
          price="$119.00"
          img={
            "https://s3-alpha-sig.figma.com/img/586c/8523/1ab58d21463d86aa3768f5c6c78f8a1f?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qEWa2ULfFh1eYZ4cO1XjfGRdA2EvnXVWx2jmKMYpSknTfac0KF0ElRyFT3JavsOEAcsSvfWpkbFd6I7glARn4nq970GBFUeQvfGZrZmbpuhno6gc6WmO8tTHx6C-NYhck3YnbUh4WTQ9goret-dM8b942KFEzGXJRnJCdloN1reYw4ahnqbseXFFpnaI-Mjv5E3hEb0gSpnnvI~lQaibjbP23D0kfgsjXIjR-UGyv6502GtkYIS7F2-8oCuZpfVH33LrRpMHclMR-pkBoCyQ6Ec1Zu32uwzvvlJG2yZdBHl7zv45uS80P1detCDFYfeFd2zamX~CofgrzxnLk9dZGw__"
          }
        />
        <Card
          title="Angel Wing Begonia"
          price="$169.00"
          img={
            "https://s3-alpha-sig.figma.com/img/4826/f3a4/1a2148d881d8376b26471cced915b1bb?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N0gKZIg49zDi8AigVwti5-Ujy6ZFJh9qos4qO~cr8v7KIF8HlEi-UJOwbZrRtI96NaA31EANj95I8GhZswugx1zNNUPS8KGDYB3dFYv-Xmtm3mDvdJo4CWnD-5eG~zUPCQKDubK0us-t7KZrxD2kvKwMkoBylS14AkM5QtV1zZ4LAVB7S1tKI7RYvXKAqJlPY6Rf3LOOoKeEfCOzkfQt-0g0Ggt3fPMXpCg6FI9AoNQdatxNP7wmhfYfOl06TgzX3V9vxA4nApY2ekDhidx2lbPp9pMjVZf2tpSci2YiwpRWiVHEKBaq43XaDiA72XCSwtq6mdZtqYcUee2vPdw2ag__"
          }
        />
        <Card
          title="African Violet"
          price="$199.00"
          img={
            "https://s3-alpha-sig.figma.com/img/7c59/7aa9/1ee5df5d1fd65d8184246c0c9918f920?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AEwxIeC0f6oWWqC5jeG05Oz6S2-kDH~gHfm08vv0hG0O0B5~a5ExCmC4i9amPiG4bLJd903ir-DbCAMyTbAuhVaEtDW9yKVZb~Y2KTSPerEtR0Nz85vdzgMSRckjbnT66~SwQf-R-wZYmNYV-F4IUlL1SEzZ9yYkdAXBjnhAurulehSfo3zPHd3uHff8oohFmfvi5gOzgMhbYRKudLyOaq-Z5N~37TYIoz~2q3yp-MzpKWeB5g1M0oKKnQz5fnyYwrPhbkUpr6RIhGCHDw-1rZfnRAoThyyEqffh-avGr5cXz17SyUR-OoK-tzVFOeeS9Xfr2a~ce~HWXD5cza-8ug__"
          }
        />
      </div>
      <div className="qator2">
        <Card
          title="Beach Spider Lily"
          price="$129.00"
          img={
            "https://s3-alpha-sig.figma.com/img/4575/e3df/52fa214db1f3ce519277860c13b11e21?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pQbvdbmRhlQhu~sr-6LEuyNCo1axe7XfIXZrTdmMrfOf6qdPtslC6It6srujqaa00qseqB-I6w1xHNL2um5QT8oZTbIzPpAtO5F2ZqFoZP9W3pX0mM1S0V1xnnRtwVj1eV0xPcmwSKd3Uha0OaEUlSfuFHa~gUL7zmsPFL3JKYRAVPSrp9g4-MH9hOFI7TvFXiY6yq6~x3cVf47ZOrGiTFUPR2wWVxf1Wj8WanTYuSrdukSSh3Y0BmhBscQQgVKIvIklPOdH5UsR9z03iIIZZGrqbeA2Q2JLGWQsg~qzcTX7ad~MZGWHBqXUh6MjQqqttgFDxcnpPW6GV~hdrX2lKA__"
          }
        />
        <Card
          title="Blushing Bromeliad"
          price="$139.00"
          img={
            "https://s3-alpha-sig.figma.com/img/9531/c63d/3f618aefdf1ccb10a5aa0e2d00f45d0b?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Mb7ygCAkNsN5PLmSJ4vq1LUDyz-cz9SYEJCk51H0x1w6drlv17uDVWhKc-dA2XiLXsVsbJ6WAzbtJ0HKrtUxS6gQesTEj106YBlm28g5bOgSVP1X3GSasO3AvUGDzNYi-MRgFG8BpNhzTYjb9e3x2fRXfSTaQYY3DXkoAo2M1vgLB03PHHif7vc~vlKbikZCPp94BtLX2eARGYCHevUn6hKqtjfh1j81sRB73wA0fxImXaXEDk9trP~5c5EhQbqpecBuK6Dq2s2ByFnyhaIzU6VBm3ektgHGNArllJaJrImLsbD0cDa4Lbpn1FNnB3UJi3vshqZt2R74Y8d9emm5oA__"
          }
        />
        <Card
          title="Aluminum Plant"
          price="$179.00"
          img={
            "https://s3-alpha-sig.figma.com/img/744c/96db/a60207fabc5a7d29f8801ecf6b4e2aed?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CSMONnT8C59An7QXU4ZpXlUkbi1eeXXtRkk6HDPcD3uqRtNKJsh8~P-8Pw3tb~oDlcrVn66JWwOg5s~IYN2H2MMCK8W70AHhoOtjH-YsWy8NBfuIYGdoxEBULdlclMf3X2WzhNRXXtycD~6k~DlBI5kaH36gSYMPolX8FynlJCPDXaBZjaiVJdcaVk-EONgBMP1gooV8-IX0KWjmQItOSowG2XZ7mQNvDTcMQinbeyKw0itTASczB9c~QXCrvJJdQojeBCsuGx4PzvybkmDM3zPe0KgNKWWDPH72un9J8Ue6jRJsWREvNc~TFzr20DmWPv428qShEaNKFYhD713Upg__"
          }
        />
      </div>
      <div className="qator3">
        <Card
          title="Bird's Nest Fern"
          price="$99.00"
          img={
            "https://s3-alpha-sig.figma.com/img/9957/e153/a59c050946e77e8fc7e11525e87c4678?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U-bZxqJZSBrGgynvZNfBc2B9ko~ZzeY0dML2zqng1G0Y1QpC4BpF-UE2-0sC2~QbptRvHzDRS~XU6SZXNkDpxpDjHv06k0ddmy4DWIGBKmd8PnGDYR0~JEgekJdMAxD-EA1TGaJ5P~OInQTNfDVixHYPUztZdO5bnNtGu2PyzfhqExYR1zKqAX7YudBtVaMRZviyLKABIBZhSsyfoVLMYfdGihs2yTaoFkxb~uH1liDQhvC6AhIesft8I67f6AqycMlXzzavSepWKc5OawaVMD4vQ6UziBEJl9P0p-cxD3rIS0a19rni13CFlzgUuZJnSJ8QId6Q9vR-xDBnLTELBw__"
          }
        />
        <Card
          title="Broadleaf Lady Palm"
          price="$59.00"
          img={
            "https://s3-alpha-sig.figma.com/img/78e9/e6c1/90effae17498640571679183299f774e?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RxoxLqJOpH7RYrjbRetqhVs7t7fG4iLQTuaO2tP7pE7jNfVewM7ViTOwdn0Ce5nXh5UF2E2cgnThKtUeHANYE3g4LbjsY6P28hdUBgPJ4R5XnjFz1jcYgH2-vOPkSWSI7pp817CCzKeea~PjL0gqrgTie~K7enpn3lBQ1y6wOnZEi9qhfOM2sxNXmTwvlhPEbFwcugUoxQjZeqtLzDbO6JvVr786u3-~OU~g7LxYB83VW7PEHlq5KqMvvBy9g6TK6uMMA~TV6P5PVw3fTm4jEIGFAV5wjvf7sf3Tm48iCVrf5FxLstJWcHA5WQuxE~3Wcei5lxWEEvyNrGpYcUoc9g__"
          }
        />
        <Card
          title="Chinese Evergreen"
          price="$39.00"
          img={
            "https://s3-alpha-sig.figma.com/img/5219/e659/b8a1d488abd136ce27f86ab3da3ceb37?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DNCX9UgJVWPoU0ejCiIUOMQIsBqXEwFRjzWOQlPZQ6zG1q18AYLL81AkN~0zA6f9O60~F67v9OEo5DrzDtI0ecC7f02rVsb0UoIOIz05rMDtZNi5aGlXuu1PncMD43qQKUksez2YwoX2OdJV6LSX5iAwEUSIEnMK61JEpIDHBNRoSq02xrzYWOjJz4kC2OdAjtv9EG1P2dr78ZZi-C-otlqsChlcK81e2xyg2IPyn8QePzpnU0dpvqVa9gQ4~nO-cznWRMQfHphBssqWP3Td-dd3NEPjEXlpTIBabTtBBVTzQ2srFS03RlQm-SA09tsAhd2xKUzUnNeISnPbQ55b7Q__"
          }
        />
      </div>
    </div>
  );
}

export default App;
