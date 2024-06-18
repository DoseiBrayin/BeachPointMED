import React from 'react'

export const ProductsTable = () => {
  const thStyle = 'text-start font-normal text-[14px] text-[#667085]'
  const products = [
    {
      id: '1',
      name: 'Protein Bar',
      variants: [
        {
          variantId: '1a',
          variantName: 'Chocolate',
          category: 'Snacks',
          price: 2.99,
          stock: 150,
          description: 'A delicious chocolate protein bar.',
          images: ['https://example.com/images/protein-bar-chocolate.jpg']
        },
        {
          variantId: '1b',
          variantName: 'Peanut Butter',
          category: 'Snacks',
          price: 3.19,
          stock: 100,
          description: 'A tasty peanut butter protein bar.',
          images: ['https://example.com/images/protein-bar-peanut-butter.jpg']
        }
      ],
      createdAt: '2023-01-01T00:00:00Z',
      updatedAt: '2023-06-01T00:00:00Z'
    },
    {
      id: '2',
      name: 'Energy Drink',
      variants: [
        {
          variantId: '2a',
          variantName: 'Original',
          category: 'Beverages',
          price: 1.99,
          stock: 200,
          description: 'A refreshing original energy drink.',
          images: ['https://example.com/images/energy-drink-original.jpg']
        },
        {
          variantId: '2b',
          variantName: 'Berry Blast',
          category: 'Beverages',
          price: 2.14,
          stock: 120,
          description: 'A berry blast energy drink.',
          images: ['https://example.com/images/energy-drink-berry.jpg']
        },
        {
          variantId: '2c',
          variantName: 'Citrus',
          category: 'Beverages',
          price: 2.14,
          stock: 80,
          description: 'A citrus-flavored energy drink.',
          images: ['https://example.com/images/energy-drink-citrus.jpg']
        }
      ],
      createdAt: '2023-02-15T00:00:00Z',
      updatedAt: '2023-06-15T00:00:00Z'
    },
    {
      id: '3',
      name: 'Granola Mix',
      variants: [
        {
          variantId: '3a',
          variantName: 'Fruit & Nut',
          category: 'Cereals',
          price: 5.49,
          stock: 50,
          description: 'A healthy fruit and nut granola mix.',
          images: ['https://example.com/images/granola-fruit-nut.jpg']
        },
        {
          variantId: '3b',
          variantName: 'Chocolate Chip',
          category: 'Cereals',
          price: 5.74,
          stock: 30,
          description: 'A delicious chocolate chip granola mix.',
          images: ['https://example.com/images/granola-chocolate-chip.jpg']
        }
      ],
      createdAt: '2023-03-10T00:00:00Z',
      updatedAt: '2023-06-20T00:00:00Z'
    },
    {
      id: '4',
      name: 'Protein Bar',
      variants: [
        {
          variantId: '4a',
          variantName: 'Chocolate',
          category: 'Snacks',
          price: 2.99,
          stock: 150,
          description: 'A delicious chocolate protein bar.',
          images: ['https://example.com/images/protein-bar-chocolate.jpg']
        },
        {
          variantId: '4b',
          variantName: 'Peanut Butter',
          category: 'Snacks',
          price: 3.19,
          stock: 100,
          description: 'A tasty peanut butter protein bar.',
          images: ['https://example.com/images/protein-bar-peanut-butter.jpg']
        },
        {
          variantId: '4c',
          variantName: 'Strawberry',
          category: 'Snacks',
          price: 3.29,
          stock: 80,
          description: 'A sweet strawberry protein bar.',
          images: ['https://example.com/images/protein-bar-strawberry.jpg']
        }
      ],
      createdAt: '2023-01-01T00:00:00Z',
      updatedAt: '2023-06-01T00:00:00Z'
    },
    {
      id: '5',
      name: 'Energy Drink',
      variants: [
        {
          variantId: '5a',
          variantName: 'Original',
          category: 'Beverages',
          price: 1.99,
          stock: 200,
          description: 'A refreshing original energy drink.',
          images: ['https://example.com/images/energy-drink-original.jpg']
        },
        {
          variantId: '5b',
          variantName: 'Berry Blast',
          category: 'Beverages',
          price: 2.14,
          stock: 120,
          description: 'A berry blast energy drink.',
          images: ['https://example.com/images/energy-drink-berry.jpg']
        },
        {
          variantId: '5c',
          variantName: 'Citrus',
          category: 'Beverages',
          price: 2.14,
          stock: 80,
          description: 'A citrus-flavored energy drink.',
          images: ['https://example.com/images/energy-drink-citrus.jpg']
        }
      ],
      createdAt: '2023-02-15T00:00:00Z',
      updatedAt: '2023-06-15T00:00:00Z'
    },
    {
      id: '6',
      name: 'Granola Mix',
      variants: [
        {
          variantId: '6a',
          variantName: 'Fruit & Nut',
          category: 'Cereals',
          price: 5.49,
          stock: 50,
          description: 'A healthy fruit and nut granola mix.',
          images: ['https://example.com/images/granola-fruit-nut.jpg']
        },
        {
          variantId: '6b',
          variantName: 'Chocolate Chip',
          category: 'Cereals',
          price: 5.74,
          stock: 30,
          description: 'A delicious chocolate chip granola mix.',
          images: ['https://example.com/images/granola-chocolate-chip.jpg']
        },
        {
          variantId: '6c',
          variantName: 'Honey Almond',
          category: 'Cereals',
          price: 5.99,
          stock: 60,
          description: 'A sweet honey almond granola mix.',
          images: ['https://example.com/images/granola-honey-almond.jpg']
        }
      ],
      createdAt: '2023-03-10T00:00:00Z',
      updatedAt: '2023-06-20T00:00:00Z'
    },
    {
      id: '7',
      name: 'Yogurt',
      variants: [
        {
          variantId: '7a',
          variantName: 'Strawberry',
          category: 'Dairy',
          price: 1.49,
          stock: 90,
          description: 'A creamy strawberry yogurt.',
          images: ['https://example.com/images/yogurt-strawberry.jpg']
        },
        {
          variantId: '7b',
          variantName: 'Blueberry',
          category: 'Dairy',
          price: 1.49,
          stock: 85,
          description: 'A delicious blueberry yogurt.',
          images: ['https://example.com/images/yogurt-blueberry.jpg']
        },
        {
          variantId: '7c',
          variantName: 'Vanilla',
          category: 'Dairy',
          price: 1.39,
          stock: 120,
          description: 'A classic vanilla yogurt.',
          images: ['https://example.com/images/yogurt-vanilla.jpg']
        }
      ],
      createdAt: '2023-04-01T00:00:00Z',
      updatedAt: '2023-06-25T00:00:00Z'
    },
    {
      id: '8',
      name: 'Trail Mix',
      variants: [
        {
          variantId: '8a',
          variantName: 'Sweet & Salty',
          category: 'Snacks',
          price: 4.99,
          stock: 70,
          description: 'A sweet and salty trail mix.',
          images: ['https://example.com/images/trail-mix-sweet-salty.jpg']
        },
        {
          variantId: '8b',
          variantName: 'Spicy',
          category: 'Snacks',
          price: 5.29,
          stock: 50,
          description: 'A spicy trail mix.',
          images: ['https://example.com/images/trail-mix-spicy.jpg']
        },
        {
          variantId: '8c',
          variantName: 'Nutty',
          category: 'Snacks',
          price: 5.49,
          stock: 40,
          description: 'A nutty trail mix.',
          images: ['https://example.com/images/trail-mix-nutty.jpg']
        }
      ],
      createdAt: '2023-04-15T00:00:00Z',
      updatedAt: '2023-06-30T00:00:00Z'
    },
    {
      id: '9',
      name: 'Vitamin Water',
      variants: [
        {
          variantId: '9a',
          variantName: 'Lemonade',
          category: 'Beverages',
          price: 1.99,
          stock: 110,
          description: 'A refreshing lemonade vitamin water.',
          images: ['https://example.com/images/vitamin-water-lemonade.jpg']
        },
        {
          variantId: '9b',
          variantName: 'Tropical',
          category: 'Beverages',
          price: 2.09,
          stock: 90,
          description: 'A tropical-flavored vitamin water.',
          images: ['https://example.com/images/vitamin-water-tropical.jpg']
        },
        {
          variantId: '9c',
          variantName: 'Pomegranate',
          category: 'Beverages',
          price: 2.19,
          stock: 80,
          description: 'A pomegranate-flavored vitamin water.',
          images: ['https://example.com/images/vitamin-water-pomegranate.jpg']
        }
      ],
      createdAt: '2023-05-01T00:00:00Z',
      updatedAt: '2023-07-01T00:00:00Z'
    },
    {
      id: '10',
      name: 'Ice Cream',
      variants: [
        {
          variantId: '10a',
          variantName: 'Chocolate',
          category: 'Desserts',
          price: 3.99,
          stock: 60,
          description: 'A creamy chocolate ice cream.',
          images: ['https://example.com/images/ice-cream-chocolate.jpg']
        },
        {
          variantId: '10b',
          variantName: 'Vanilla',
          category: 'Desserts',
          price: 3.79,
          stock: 75,
          description: 'A classic vanilla ice cream.',
          images: ['https://example.com/images/ice-cream-vanilla.jpg']
        },
        {
          variantId: '10c',
          variantName: 'Strawberry',
          category: 'Desserts',
          price: 3.89,
          stock: 50,
          description: 'A fruity strawberry ice cream.',
          images: ['https://example.com/images/ice-cream-strawberry.jpg']
        }
      ],
      createdAt: '2023-05-15T00:00:00Z',
      updatedAt: '2023-07-10T00:00:00Z'
    },
    {
      id: '11',
      name: 'Almond Milk',
      variants: [
        {
          variantId: '11a',
          variantName: 'Original',
          category: 'Dairy Alternatives',
          price: 2.99,
          stock: 100,
          description: 'A smooth and creamy original almond milk.',
          images: ['https://example.com/images/almond-milk-original.jpg']
        },
        {
          variantId: '11b',
          variantName: 'Vanilla',
          category: 'Dairy Alternatives',
          price: 3.19,
          stock: 80,
          description: 'A delicious vanilla flavored almond milk.',
          images: ['https://example.com/images/almond-milk-vanilla.jpg']
        },
        {
          variantId: '11c',
          variantName: 'Chocolate',
          category: 'Dairy Alternatives',
          price: 3.29,
          stock: 60,
          description: 'A rich and chocolaty almond milk.',
          images: ['https://example.com/images/almond-milk-chocolate.jpg']
        }
      ],
      createdAt: '2023-01-10T00:00:00Z',
      updatedAt: '2023-07-10T00:00:00Z'
    },
    {
      id: '12',
      name: 'Organic Juice',
      variants: [
        {
          variantId: '12a',
          variantName: 'Apple',
          category: 'Beverages',
          price: 2.49,
          stock: 150,
          description: 'A refreshing organic apple juice.',
          images: ['https://example.com/images/organic-juice-apple.jpg']
        },
        {
          variantId: '12b',
          variantName: 'Orange',
          category: 'Beverages',
          price: 2.69,
          stock: 130,
          description: 'A tangy organic orange juice.',
          images: ['https://example.com/images/organic-juice-orange.jpg']
        },
        {
          variantId: '12c',
          variantName: 'Grape',
          category: 'Beverages',
          price: 2.89,
          stock: 120,
          description: 'A sweet organic grape juice.',
          images: ['https://example.com/images/organic-juice-grape.jpg']
        }
      ],
      createdAt: '2023-02-20T00:00:00Z',
      updatedAt: '2023-07-20T00:00:00Z'
    },
    {
      id: '13',
      name: 'Protein Shake',
      variants: [
        {
          variantId: '13a',
          variantName: 'Vanilla',
          category: 'Supplements',
          price: 3.99,
          stock: 90,
          description: 'A smooth and creamy vanilla protein shake.',
          images: ['https://example.com/images/protein-shake-vanilla.jpg']
        },
        {
          variantId: '13b',
          variantName: 'Chocolate',
          category: 'Supplements',
          price: 4.19,
          stock: 70,
          description: 'A rich chocolate flavored protein shake.',
          images: ['https://example.com/images/protein-shake-chocolate.jpg']
        },
        {
          variantId: '13c',
          variantName: 'Strawberry',
          category: 'Supplements',
          price: 4.29,
          stock: 60,
          description: 'A fruity strawberry protein shake.',
          images: ['https://example.com/images/protein-shake-strawberry.jpg']
        }
      ],
      createdAt: '2023-03-15T00:00:00Z',
      updatedAt: '2023-07-25T00:00:00Z'
    },
    {
      id: '14',
      name: 'Granola Bars',
      variants: [
        {
          variantId: '14a',
          variantName: 'Honey Oat',
          category: 'Snacks',
          price: 2.49,
          stock: 110,
          description: 'Crunchy honey oat granola bars.',
          images: ['https://example.com/images/granola-bar-honey-oat.jpg']
        },
        {
          variantId: '14b',
          variantName: 'Peanut Butter',
          category: 'Snacks',
          price: 2.69,
          stock: 90,
          description: 'Delicious peanut butter granola bars.',
          images: ['https://example.com/images/granola-bar-peanut-butter.jpg']
        },
        {
          variantId: '14c',
          variantName: 'Dark Chocolate',
          category: 'Snacks',
          price: 2.89,
          stock: 80,
          description: 'Rich dark chocolate granola bars.',
          images: ['https://example.com/images/granola-bar-dark-chocolate.jpg']
        }
      ],
      createdAt: '2023-04-10T00:00:00Z',
      updatedAt: '2023-07-30T00:00:00Z'
    },
    {
      id: '15',
      name: 'Organic Tea',
      variants: [
        {
          variantId: '15a',
          variantName: 'Green Tea',
          category: 'Beverages',
          price: 1.99,
          stock: 100,
          description: 'Refreshing organic green tea.',
          images: ['https://example.com/images/organic-tea-green.jpg']
        },
        {
          variantId: '15b',
          variantName: 'Chamomile',
          category: 'Beverages',
          price: 2.19,
          stock: 90,
          description: 'Soothing organic chamomile tea.',
          images: ['https://example.com/images/organic-tea-chamomile.jpg']
        },
        {
          variantId: '15c',
          variantName: 'Mint',
          category: 'Beverages',
          price: 2.29,
          stock: 80,
          description: 'Refreshing organic mint tea.',
          images: ['https://example.com/images/organic-tea-mint.jpg']
        }
      ],
      createdAt: '2023-05-01T00:00:00Z',
      updatedAt: '2023-08-01T00:00:00Z'
    },
    {
      id: '16',
      name: 'Organic Coffee',
      variants: [
        {
          variantId: '16a',
          variantName: 'Espresso',
          category: 'Beverages',
          price: 3.99,
          stock: 100,
          description: 'Rich and bold organic espresso coffee.',
          images: ['https://example.com/images/organic-coffee-espresso.jpg']
        },
        {
          variantId: '16b',
          variantName: 'French Roast',
          category: 'Beverages',
          price: 4.19,
          stock: 90,
          description: 'Dark and smooth organic French roast coffee.',
          images: ['https://example.com/images/organic-coffee-french-roast.jpg']
        },
        {
          variantId: '16c',
          variantName: 'Colombian',
          category: 'Beverages',
          price: 4.29,
          stock: 80,
          description: 'Rich and aromatic organic Colombian coffee.',
          images: ['https://example.com/images/organic-coffee-colombian.jpg']
        }
      ],
      createdAt: '2023-05-15T00:00:00Z',
      updatedAt: '2023-08-10T00:00:00Z'
    },
    {
      id: '17',
      name: 'Nut Butter',
      variants: [
        {
          variantId: '17a',
          variantName: 'Almond Butter',
          category: 'Spreads',
          price: 5.99,
          stock: 70,
          description: 'Creamy organic almond butter.',
          images: ['https://example.com/images/nut-butter-almond.jpg']
        },
        {
          variantId: '17b',
          variantName: 'Cashew Butter',
          category: 'Spreads',
          price: 6.19,
          stock: 60,
          description: 'Smooth organic cashew butter.',
          images: ['https://example.com/images/nut-butter-cashew.jpg']
        },
        {
          variantId: '17c',
          variantName: 'Peanut Butter',
          category: 'Spreads',
          price: 4.99,
          stock: 90,
          description: 'Delicious organic peanut butter.',
          images: ['https://example.com/images/nut-butter-peanut.jpg']
        }
      ],
      createdAt: '2023-06-01T00:00:00Z',
      updatedAt: '2023-08-20T00:00:00Z'
    },
    {
      id: '18',
      name: 'Gluten-Free Bread',
      variants: [
        {
          variantId: '18a',
          variantName: 'White',
          category: 'Bakery',
          price: 4.49,
          stock: 50,
          description: 'Soft and fluffy gluten-free white bread.',
          images: ['https://example.com/images/gluten-free-bread-white.jpg']
        },
        {
          variantId: '18b',
          variantName: 'Multigrain',
          category: 'Bakery',
          price: 4.69,
          stock: 40,
          description: 'Healthy gluten-free multigrain bread.',
          images: ['https://example.com/images/gluten-free-bread-multigrain.jpg']
        },
        {
          variantId: '18c',
          variantName: 'Cinnamon Raisin',
          category: 'Bakery',
          price: 4.89,
          stock: 30,
          description: 'Sweet and flavorful gluten-free cinnamon raisin bread.',
          images: ['https://example.com/images/gluten-free-bread-cinnamon-raisin.jpg']
        }
      ],
      createdAt: '2023-06-15T00:00:00Z',
      updatedAt: '2023-08-30T00:00:00Z'
    },
    {
      id: '19',
      name: 'Organic Peanut Butter',
      variants: [
        {
          variantId: '19a',
          variantName: 'Creamy',
          category: 'Spreads',
          price: 3.99,
          stock: 100,
          description: 'Smooth and creamy organic peanut butter.',
          images: ['https://example.com/images/organic-peanut-butter-creamy.jpg']
        },
        {
          variantId: '19b',
          variantName: 'Crunchy',
          category: 'Spreads',
          price: 4.19,
          stock: 90,
          description: 'Crunchy and delicious organic peanut butter.',
          images: ['https://example.com/images/organic-peanut-butter-crunchy.jpg']
        },
        {
          variantId: '19c',
          variantName: 'Honey',
          category: 'Spreads',
          price: 4.29,
          stock: 80,
          description: 'Sweet and smooth organic honey peanut butter.',
          images: ['https://example.com/images/organic-peanut-butter-honey.jpg']
        }
      ],
      createdAt: '2023-07-01T00:00:00Z',
      updatedAt: '2023-09-01T00:00:00Z'
    },
    {
      id: '20',
      name: 'Vegan Cheese',
      variants: [
        {
          variantId: '20a',
          variantName: 'Mozzarella',
          category: 'Dairy Alternatives',
          price: 5.99,
          stock: 100,
          description: 'Meltable vegan mozzarella cheese.',
          images: ['https://example.com/images/vegan-cheese-mozzarella.jpg']
        },
        {
          variantId: '20b',
          variantName: 'Cheddar',
          category: 'Dairy Alternatives',
          price: 6.19,
          stock: 90,
          description: 'Sharp and tasty vegan cheddar cheese.',
          images: ['https://example.com/images/vegan-cheese-cheddar.jpg']
        },
        {
          variantId: '20c',
          variantName: 'Parmesan',
          category: 'Dairy Alternatives',
          price: 6.29,
          stock: 80,
          description: 'Rich and savory vegan parmesan cheese.',
          images: ['https://example.com/images/vegan-cheese-parmesan.jpg']
        }
      ],
      createdAt: '2023-07-15T00:00:00Z',
      updatedAt: '2023-09-15T00:00:00Z'
    }
  ]

  return (
    <table className='w-full border-[1px] border-[#E8F1FD] mt-7'>
        <thead className='h-[38px] bg-[#F7F9FC]'>
          <tr>
            <th className={`${thStyle} pl-6`}>Name</th>
            <th className={thStyle}>Variante</th>
            <th className={thStyle}>Category</th>
            <th className={thStyle}>Locations Enabled</th>
            <th className={`${thStyle} pr-6`}></th>
          </tr>
        </thead>
        <tbody>
            {
                products.map((product) =>
                  product.variants.map(variant => {
                    return (
                        <tr className='h-[55px] border-[1px] border-[#E8F1FD]' key={variant.variantId}>
                            <td className={`${thStyle} pl-6`}>{product.name}</td>
                            <td className={`${thStyle}`}>{variant.variantName}</td>
                            <td className={'text-start font-light text-[14px]'}>{variant.category}</td>
                            <td className={thStyle}>All Locations</td>
                            <td className={thStyle}>
                            <img className="cursor-pointer" src="/three_dots.svg" alt="" />
                            </td>
                        </tr>
                    )
                  })
                )
            }
        </tbody>
      </table>
  )
}
