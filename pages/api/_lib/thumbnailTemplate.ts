interface GetHtmlProps {
    title: string;
    thumbnail_bg?: string;
  }
  
  export function getHtml({
    title,
    thumbnail_bg = '#121212'
  }: GetHtmlProps) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      
      <title>Thumbnail</title>
    
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap" rel="stylesheet">
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap" rel="stylesheet">
      <style>
        body {
          margin: 0;
          font-family: Roboto, sans-serif;
          color: #121214;
          background: #FFFfff;
          background-image: 
            radial-gradient(circle at 25px 25px, rgba(0, 0, 0, 0.2) 2%, transparent 0%), 
            radial-gradient(circle at 75px 75px, rgba(0, 0, 0, 0.2) 2%, transparent 0%);
          background-size: 100px 100px;
          height: 100vh;
        }
    
        #wrapper {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
    
        svg {
          height: 40px;
          margin-top: 80px;
        }
    
        h1 {
          font-size: 62px;
          line-height: 80px;
    
          max-width: 80%;
        }
      </style>
    </head>
    <body>
      <div id="wrapper">
        <h1>${title}</h1>

        <svg version="1.0" width="100" height="100" id="Camada_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 3000 3000" style="enable-background:new 0 0 3000 3000;" xml:space="preserve">
<g>
	<g>
		<path d="M2295.95,544.36v1081.84h-153.31c-244.5,0-458.4-130.61-575.74-325.88l131.37-78.82
			c90.68,150.63,255.73,251.39,444.37,251.39V544.36H2295.95z"/>
		<path d="M2142.64,0v152.8c-216.7,0-422.56,46.81-607.88,130.73c-325.37,147.57-587.47,409.8-734.92,735.17
			c-74.1,163.26-119.13,342.33-128.69,530.84v729.05H516.43v-652.4c0-340.42,104.59-656.48,283.41-917.56
			c114.15-166.7,258.41-310.96,425.11-425.11C1486.16,104.59,1802.09,0,2142.64,0z"/>
		<path d="M2008.63,813.42v170.31c-94.04,0-170.31-76.24-170.31-170.31H2008.63z"/>
		<line x1="2142.64" y1="152.8" x2="2142.64" y2="0"/>
		<line x1="671.14" y1="2278.6" x2="516.43" y2="2278.6"/>
		<path d="M2483.57,283.53v153.31h-340.93c-4.97,0-9.95,0-14.92,0.13c-193.74,2.3-376.13,51.02-536.97,135.45
			c-379.07,198.72-637.6,596.02-637.6,1053.78v652.4h15.69c0.25,0.77,0.77,1.66,1.4,2.42c0.13-0.77,0.26-1.66,0.51-2.42h1148.8
			c-58.16-188.26-221.04-330.73-420.65-359.42v-154.59c178.18,19.64,335.44,109.05,443.73,240.3
			c64.67,78.19,111.86,171.42,135.71,273.71c11.48,49.23,17.6,100.51,17.6,153.31H799.84v-805.71c0-25.76,0.77-51.27,2.3-76.66
			c39.28-700.23,615.15-1256.96,1323.16-1265.76c5.74-0.26,11.61-0.26,17.35-0.26H2483.57z"/>
		<line x1="2295.95" y1="544.36" x2="2142.64" y2="544.36"/>
		<rect x="516.43" y="2562.65" width="1779.52" height="153.31"/>
		<rect x="516.43" y="2846.69" width="1779.52" height="153.31"/>
	</g>
</g>
</svg>
      </div>
    </body>
    </html>`
  }