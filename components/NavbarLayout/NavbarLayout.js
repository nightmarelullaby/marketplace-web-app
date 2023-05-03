
import {memo} from "react"
import { useRecoilState } from "recoil"
import Navbar,{NavbarElement} from "../nav/Navbar"
import PopOverLi from '../PopOver/PopOverLi'
import Link from "next/link"
import MoreButton from '../Buttons/MoreButton'
import PopOver from "../PopOver/PopOver"
import Button from '../Buttons/Button'
import Searchbar from '../Searchbar/Searchbar'
import PopOverContent from '../PopOver/PopOverContent'
import PopOverTrigger from '../PopOver/PopOverTrigger'
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import ProductCard from '../Cards/ProductCard'
import CategoryList from '../CategoryList/CategoryList'
import CategoryListElement from '../CategoryList/CategoryListElement'
import UserDropdownElement from "../PopOver/UserDropdownElement"
import UserDropdown from "../UserDropdown/UserDropdown"
import InputText from "../InputText/InputText"

function NavbarLayout({children}){
	  
  
	return(
			<div>
				 <Navbar>
  
            <NavbarElement >
              <Link href="/">
                e-commerce site
              </Link>
            </NavbarElement >
          <NavbarElement style={{margin:"0 0 0 auto",alignSelf:"center"}}>
            <PopOver>
                <PopOverTrigger>
                  <Button customStyles={{
                    display:"flex",
                    gap:4,alignItems:"center",
                    backgroundColor:"transparent",
                    border:"none",
                    cursor:"pointer"}}>
                  
                  <small style={{
                    letterSpacing:.3,
                    fontWeight:400,
                    color:"var(--light)"}}>
                    Categorías
                  </small>
                  <svg width="16" fill="none" height="16" stroke="var(--light)" strokeWidth="1.8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                  </svg>
                  </Button>
                </PopOverTrigger>
                <PopOverContent position="bottom">
                  <ul style={{padding:24,gap:24,flexDirection:"column",display:"flex"}}>
                    <PopOverLi >
                        <svg  width="32px" height="32px" viewBox="0 0 1000 1000" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  enableBackground="new 0 0 1000 1000" xmlSpace="preserve">
                          <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)">
                            <path d="M2177.2,4999.4c-98.4-50.2-90.7-225.8,11.6-264.4c32.8-13.5,1040.1-17.4,2875.3-15.4c2666.9,5.8,2825.2,7.7,2858,40.5c44.4,44.4,44.4,175.6,0,220c-32.8,32.8-191.1,34.7-2865.7,38.6C2817.9,5022.5,2215.8,5018.7,2177.2,4999.4z"/>
                            <path d="M2246.7,4364.5l-48.2-44.4L1733.4-37.3c-256.7-2398.7-461.2-4380.5-455.4-4405.6c7.7-25.1,30.9-57.9,56-73.3c28.9-19.3,430.3-61.7,1335.4-144.7c1549.6-140.9,1466.6-137,1512.9-88.8c30.9,30.9,119.6,470.9,455.4,2257.8c229.6,1221.5,420.7,2221.1,424.5,2225c7.7,9.6-17.4,137,463.1-2317.6c227.7-1165.6,418.8-2126.6,424.5-2136.2c7.7-11.6,36.7-30.9,63.7-46.3c48.3-25.1,196.8-13.5,1325.7,96.5c700.5,69.5,1292.9,129.3,1318,135.1c23.2,3.9,52.1,28.9,63.7,52.1c13.5,30.9-86.8,1277.5-357,4423l-376.3,4380.5l-50.2,44.4l-50.2,42.5H5091.1H2294.9L2246.7,4364.5z M6524.9,4022.9c19.3-183.3,69.5-401.4,142.8-619.5c208.4-623.3,604-1184.9,1117.3-1588.2c113.9-88.8,119.6-98.4,131.2-193c5.8-56,54-604,108-1219.6c54-615.6,117.7-1358.5,144.7-1649.9c181.4-2051.3,264.4-3014.3,258.6-3020c-17.4-15.4-2207.6-220-2219.2-206.5c-5.8,7.7-73.3,335.8-150.5,727.5C5430.8-496.6,5208.8,628.5,5189.6,651.6c-56,67.5-231.6,50.2-262.4-23.2c-7.7-19.3-229.6-1173.3-490.2-2564.6c-262.5-1393.3-482.4-2537.6-486.3-2543.4c-13.5-11.6-2348.5,231.6-2365.9,247c-5.8,7.7,7.7,175.6,28.9,374.4c272.1,2412.2,623.3,5509.4,631,5555.8s44.4,86.8,160.2,177.5c173.7,137,494,461.2,625.2,633c202.6,264.4,393.7,629.1,505.6,961c54,162.1,127.4,496,127.4,578.9v50.2h733.3h733.3v-81.1c-1.9-46.3-17.4-517.2-36.7-1047.9c-34.7-959.1-34.7-966.8-83-1072.9c-57.9-127.4-138.9-193-258.6-206.5c-160.2-17.4-229.6-175.6-123.5-281.7c44.4-46.3,210.3-63.7,320.3-32.8c193,52.1,364.7,235.4,418.8,445.8c21.2,81.1,30.9,333.8,40.5,1080.7c7.7,536.5,17.4,1032.4,23.2,1105.7l11.6,129.3h536.5h534.5L6524.9,4022.9z M3393,4051.9c0-79.1-56-316.5-115.8-495.9c-106.1-318.4-281.7-625.2-534.6-937.9c-131.2-164-407.2-440-422.6-424.5c-7.7,7.7,166,1842.9,177.5,1881.5c3.8,17.4,111.9,23.2,451.6,23.2H3393V4051.9z M7704,3978.5c63.7-640.7,166-1823.6,162.1-1854.5c-3.9-28.9-50.2,11.6-198.8,177.5c-333.8,374.4-555.8,717.9-694.7,1080.7c-83,216.1-142.8,472.8-144.7,615.6v100.4h432.3h432.3L7704,3978.5z"/>
                          </g>
                        </svg>
                        <div style={{display:"flex",flexDirection:"column"}}>
                          <p style={{fontWeight:600}}>Pantalones</p>
                          <small style={{whiteSpace:"nowrap"}}>Luce hermosos jeans con las mejores ofertas</small>
                          </div>   
                    </PopOverLi>
                    <PopOverLi >
                        <svg viewBox="0 0 1000 1000" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  enableBackground="new 0 0 1000 1000" xmlSpace="preserve">

                              <g>
                              <g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)">
                              <path d="M3635.5,4682.4c-84.3-82.4-249.1-241.4-366-354.5l-210.8-205l-507.8-237.6c-279.8-132.2-542.3-249.1-584.5-262.5c-632.4-201.2-1299.3-1151.7-1765-2518.1C97.9,797.9,78.7,698.3,120.9,656.1c11.5-11.5,287.5-174.4,611.3-362.2l592.1-341.1v-1757.3v-1757.3l44.1-51.7l46-51.7l268.3,24.9c216.5,21.1,302.8,21.1,436.9,1.9c222.3-30.7,283.6-57.5,565.3-243.4c530.8-350.7,1161.3-588.3,1830.1-689.9c316.2-47.9,983.1-49.8,1293.5,0c716.7,111.1,1291.6,348.8,1833.9,758.9c222.3,168.6,404.3,210.8,739.7,170.6l210.8-24.9l44.1,53.7l46,51.7v1757.3V-47.2l609.4,335.4L9900,623.5v153.3c-1.9,124.6-17.3,203.1-82.4,421.6c-189.7,613.2-475.2,1257.1-734,1648.1c-251,381.3-620.9,705.2-889.2,778c-42.2,11.5-302.8,126.5-578.7,256.8l-504,235.7l-354.5,343c-195.5,187.8-377.5,348.8-404.3,360.3c-36.4,13.4-61.3,9.6-97.7-9.6c-65.1-36.4-69-47.9-128.4-295.1c-93.9-392.9-268.3-755-465.7-969.7c-293.2-318.1-718.6-341.1-1075.1-59.4c-247.2,195.5-458,601.7-578.7,1113.4c-26.8,116.9-49.8,172.5-80.5,195.5C3846.3,4856.8,3802.2,4839.5,3635.5,4682.4z M3942.1,3835.3c103.5-222.3,218.5-385.2,369.9-523.2c118.8-111.1,279.8-214.6,371.8-235.7c28.7-7.7,55.6-21.1,61.3-28.8s-86.2-122.6-203.1-256.8l-210.8-241.5l-55.6,28.8c-93.9,49.8-331.5,247.2-446.5,375.6c-226.1,247.2-406.3,567.2-484.8,854.7l-32.6,122.6l84.3,90.1c46,49.8,143.7,153.3,216.5,228l134.1,139.9l55.6-187.8C3830.9,4099.8,3894.2,3935,3942.1,3835.3z M6657.5,4172.6l226.1-214.6l-49.8-153.3c-113.1-346.9-331.5-699.5-578.7-929.4c-130.3-120.7-354.5-287.5-389-287.5c-15.3,0-408.2,448.4-417.8,477.2c-3.8,9.6,26.8,28.8,67.1,40.2c352.6,111.1,686.1,546.2,843.2,1096.2c28.8,103.5,57.5,187.8,63.2,187.8C6427.6,4387.3,6533,4291.4,6657.5,4172.6z M3068.2,3661c138-392.9,477.2-873.9,793.4-1123c172.5-136.1,459.9-295.1,536.6-295.1c38.3,0,99.7,59.4,302.8,287.5c139.9,157.1,260.6,287.5,270.2,287.5c7.7,0,13.4-525.1,13.4-1165.1c0-642,5.7-2242.1,13.4-3558.7l11.5-2391.6l-189.7,15.3c-699.5,49.8-1406.6,289.4-1968.1,668.8c-364.1,243.4-509.8,289.4-937.1,289.4H1631v1619.3V-85.5l124.6,153.3C2119.6,520.1,2363,1110.3,2414.8,1668c46,490.6,15.3,1147.9-72.8,1609.7c-23,111.1-34.5,203.1-24.9,207c7.7,1.9,164.8,76.7,348.8,164.8c184,88.2,341.1,155.2,346.9,149.5C3018.4,3791.3,3043.3,3729.9,3068.2,3661z M7813.1,3450.2c-5.8-15.3-44.1-128.4-86.2-249.1c-93.9-274-149.5-561.5-172.5-887.3c-21.1-291.3,0-695.6,46-923.7c92-450.3,339.2-942.9,649.6-1301.2l126.5-143.7v-1638.5v-1636.6H8181c-316.2-1.9-486.7-55.6-734-231.9c-601.7-427.3-1262.9-666.9-1996.8-722.5l-178.2-13.4V-785c0,1964.3,7.7,3506.9,17.3,3503.1c7.7-1.9,82.4-82.4,164.8-178.2c82.4-93.9,174.4-201.2,207-237.6c69-80.5,118.8-84.3,266.4-13.4c325.8,155.2,642,456.1,900.7,854.7c147.6,228,216.6,369.9,312.4,647.7c5.8,15.3,116.9-30.7,345-143.7C7734.5,3523,7820.8,3471.2,7813.1,3450.2z M8351.6,3237.4C8782.8,2944.2,9258,2101,9562.7,1093.1c44.1-141.8,76.7-258.7,72.8-258.7c-76.7-59.4-1098.1-603.7-1115.3-596c-44.1,17.2-243.4,270.2-348.8,444.6c-184,302.8-277.9,607.5-314.3,1009.9c-49.8,551.9,32.6,1142.1,212.7,1538.8l55.6,124.6l67.1-28.7C8230.9,3312.2,8301.8,3271.9,8351.6,3237.4z M2041.1,3283.4c65.2-216.5,115-825.9,99.7-1220.7c-21.1-551.9-103.5-910.3-289.4-1280.1c-116.9-233.8-335.4-551.9-377.5-551.9c-38.3,0-1031,599.8-1031,622.8c0,13.4,34.5,126.5,78.6,251c367.9,1071.2,891.1,1889.5,1374,2152.1C2023.8,3325.6,2027.7,3325.6,2041.1,3283.4z"/>
                              <path d="M5846.9,1240.6c-97.7-49.8-90.1-224.2,11.5-264.5c32.6-11.5,295.1-17.2,709-13.4c741.6,5.7,726.3,3.8,726.3,149.5c0,147.6,17.3,143.7-734,149.5C6052,1265.5,5883.3,1259.8,5846.9,1240.6z"/>
                              </g>
                              </g>
                        </svg>
                        <div style={{display:"flex",flexDirection:"column"}}>
                          <p style={{fontWeight:600}}>Camisas</p>
                          <small style={{whiteSpace:"nowrap"}}>Encuentra las mejores ofertas</small>
                          </div>   
                    </PopOverLi>
                    <PopOverLi >
                        <svg viewBox="0 0 1000 1000" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  enableBackground="new 0 0 1000 1000" xmlSpace="preserve">

                <g>
                <g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)">
                <path d="M5712.4,4996.5c-63.3-24.5-69.4-40.8-142.9-326.5c-259.2-1006.1-620.4-1875.6-1181.7-2847C4165.4,1437.2,3847,794.3,3677.7,384.1c-436.8-1051-649-1451.1-996-1867.4c-306.1-365.3-524.5-536.7-1100-865.3c-585.7-334.7-773.5-510.2-877.6-816.3c-55.1-169.4-55.1-428.6,2-598c163.3-487.7,695.9-859.2,1416.4-987.8c287.8-51,949-53.1,1200-2.1c612.3,124.5,1116.4,440.8,1608.2,1008.2c177.5,206.1,610.2,775.5,885.7,1169.4c67.4,95.9,206.2,257.1,306.1,357.1c298,298,512.3,389.8,1249,532.7c210.2,38.8,453.1,97.9,540.8,130.6c489.8,179.6,761.3,514.3,834.7,1034.7C8788-232.2,8736.9,227,8592,863.7c-144.9,638.8-161.2,840.8-93.9,1122.5c93.9,385.7,355.1,871.4,714.3,1322.5c106.1,132.7,124.5,169.4,124.5,238.8c0,61.2-10.2,87.8-46.9,110.2c-51,34.7-3430.7,1340.9-3494,1351.1C5773.6,5012.8,5734.8,5006.7,5712.4,4996.5z M7494.1,4067.9c777.6-291.8,1414.3-536.7,1414.3-544.9c0-8.2-49-79.6-110.2-159.2c-161.2-216.3-357.1-553.1-465.3-806.1c-251-585.7-257.1-934.7-36.7-1806.2C8339,578,8388,361.7,8406.3,271.9c149-808.2-59.2-1283.7-659.2-1491.9c-79.6-26.5-279.6-77.5-444.9-110.2c-647-132.7-918.4-234.7-1226.6-469.4c-191.8-142.9-357.2-328.6-598-663.3c-538.8-753.1-787.8-1067.4-1047-1310.2c-551-522.5-1175.5-730.6-1971.5-661.2c-353.1,32.6-614.3,100-873.5,228.6c-369.4,181.7-604.1,467.4-630.6,769.4c-26.5,300,136.7,514.3,583.7,751c614.3,330.6,879.6,516.3,1163.3,816.3c440.8,465.3,706.1,916.4,1147,1947c220.4,516.3,489.8,1055.1,775.5,1551c514.3,893.9,920.4,1847,1181.7,2777.6c36.7,128.6,69.4,238.8,75.5,246.9c4.1,8.2,51,0,104.1-20.4C6038.9,4612.8,6718.5,4357.7,7494.1,4067.9z"/>
                </g>
                </g>
                </svg>
                        <div style={{display:"flex",flexDirection:"column"}}>
                          <p style={{fontWeight:600}}>Camisas</p>
                          <small style={{whiteSpace:"nowrap"}}>Encuentra las mejores ofertas</small>
                          </div>   
                    </PopOverLi>
                    <MoreButton >
                      <small style={{fontWeight:500}}>
                        Ver todos  
                      </small>
                    </MoreButton>
                 
                  </ul>
                </PopOverContent>
              </PopOver>
            </NavbarElement>
            <NavbarElement style={{alignSelf:"center"}}>
              <small style={{
                    letterSpacing:.3,
                    fontWeight:400,
                    color:"var(--light)"}}>
                    Marcas
                  </small>
            </NavbarElement>
            <NavbarElement style={{alignSelf:"center"}}>
              <small style={{
                    letterSpacing:.3,
                    fontWeight:400,
                    color:"var(--light)"}}>
                    Ofertas
                  </small>
            </NavbarElement>
            <NavbarElement style={{marginLeft:"auto"}}>
              <Searchbar 
                iconStyle={{marginLeft:16,alignSelf:"center"}}
                inputStyle={{padding:8}}
                style={{backgroundColor:"white",display:"flex",borderRadius:8,padding:0}} 
                placeholder="Ropa, zapatos..."/>
            </NavbarElement>
            <NavbarElement style={{display:"flex",alignItems:"center"}}>
              <ShoppingCart color="var(--light)"/>
            </NavbarElement>
            <NavbarElement style={{display:"flex",alignItems:"center"}}>
              <UserDropdown />
            </NavbarElement>
          </Navbar>
				{children}
			</div>
	)
}
export default memo(NavbarLayout)