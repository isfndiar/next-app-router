import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    title: "Tatum 2 PF",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/30648388-71e0-4cd0-b2b3-72e5c458ec58/tatum-2-pf-basketball-shoes-8fp79D.png",
    price: "40",
  },
  {
    id: 2,
    title: "Air Jordan 4 Retro",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/32090ca9-d8ef-4943-aa41-4f23dc0777af/air-jordan-4-retro-oxidised-green-shoes-lw9R0z.png",
    price: "500.20",
  },
  {
    id: 3,
    title: "Air Jordan 4 Retro",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/32090ca9-d8ef-4943-aa41-4f23dc0777af/air-jordan-4-retro-oxidised-green-shoes-lw9R0z.png",
    price: "500.20",
  },
  {
    id: 4,
    title: "Air Jordan 4 Retro",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/32090ca9-d8ef-4943-aa41-4f23dc0777af/air-jordan-4-retro-oxidised-green-shoes-lw9R0z.png",
    price: "500.20",
  },
];
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (id) {
    const dataById = data.find((item) => item.id == Number(id));
    return NextResponse.json({ status: 200, data: dataById });
  }
  return NextResponse.json({ status: 200, data });
}
