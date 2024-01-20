import data from "./data.json";

export const getInternships = async () => {
  return {
    status: 200,
    data: data,
  }
}

export const getIntership = async (id: number) => {
  const internship = data.find((intership) => intership.id === id);

  if (!internship) {
    return { 
      status: 404,
      data: null,
      message: `Internship with id ${id} not found`,
    }
  }

  return { 
    status: 200,
    data: internship,
  }
}

export const getFeaturedInternships = async () => {
  const featuredInternships = data.filter((intership) => intership.featured);

  return { 
    status: 200,
    data: featuredInternships,
  }
}