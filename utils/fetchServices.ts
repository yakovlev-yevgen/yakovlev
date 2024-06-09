export interface Service {
  id: string;
  title: string;
  description: string;
  price: Price;
  background: Background;
}

export interface Price {
  oneSession: number;
  fiveSessions: number;
}

export interface Background {
  default: Image;
  retina: Image;
}

interface Image {
  url: string;
}

const query = `
  query MyQuery {
    allServices {
      id
      title
      description
      price {
        oneSession
        fiveSessions
      }
      background {
        default {
          url
        }
        retina {
          url
        }
      }
    }
  }`;

export const fetchServices = async (): Promise<{ allServices: Service[] }> => {
  const res = await fetch(process.env.NEXT_CMS_BASE_URL as string, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.NEXT_CMS_API_KEY}`,
    },
    body: JSON.stringify({ query }),
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch data from DatoCMS: ${res.statusText}`);
  }

  const data = await res.json();
  return data.data;
};
