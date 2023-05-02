import listofrestaurants from './restaurants.json';

type ListOfRestaurantsProps = {
  lorr: typeof listofrestaurants.restaurants;
}

export default function ListOfRestaurants({ lorr }: ListOfRestaurantsProps) {
  return (
    <>
      {lorr.map((rstr) => (
        <tr key={rstr.id}>
          <td>{rstr.name}</td>
          <td>{rstr.category}</td>
          <td>
            {rstr.menu.map((mn) => (
              <tr key={mn.id}>
                <td>{mn.name}</td>
                <td>
                  (
                  {mn.price}
                  )
                </td>
              </tr>
            ))}
          </td>
        </tr>
      ))}
    </>
  );
}
