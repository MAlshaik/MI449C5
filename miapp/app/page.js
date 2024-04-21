import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <table className="w-[80%]">
      <tbody>
        <tr className="bg-[#ff6600] flex flex-row items-center px-1 gap-2 justify-between">
            <div class="flex items-center gap-2">
            <td>
            <img className="border border-white" src="/y.svg" width={18} height={18} alt="y"></img>
            </td>
            <th>Hacker News</th>
            <td>new | past | comments | ask | show | jobs | submit</td>
            </div>
            <td>login</td>
        </tr>
        <tr className="bg-[#f6f6ef] flex flex-col">
            <td className="flex flex-row items-top gap-1">
              <span className="">1.</span>
              <img className="pb-2"src="triangle.svg" width={10} height={10}></img>
              <p className="text-[14px]">Airfoil</p>
              <p className="text-[13px] pt-1 text-[#828282]">(ciechanow.ski)</p>
            </td>
            <p className="text-[9px] text-[#828282] px-4">1148 points by todsacerdoti 4 hours ago | hide | 115 comments</p>
        </tr>
        <tr className="bg-[#f6f6ef] flex flex-col">
            <td className="flex flex-row items-top gap-1">
              <span className="">2.</span>
              <img className="pb-2"src="triangle.svg" width={10} height={10}></img>
              <p className="text-[14px]">Amazon lobbyists to be banned from European parliament</p>
              <p className="text-[13px] pt-1 text-[#828282]">(uni-europa.org)</p>
            </td>
            <p className="text-[9px] text-[#828282] px-4">42 points by anigbrowl 16 minutes ago | hide | 8 comments</p>
        </tr>
        <tr className="bg-[#f6f6ef] flex flex-col">
            <td className="flex flex-row items-top gap-1">
              <span className="">3.</span>
              <img className="pb-2"src="triangle.svg" width={10} height={10}></img>
              <p className="text-[14px]">SuperTux</p>
              <p className="text-[13px] pt-1 text-[#828282]">(github.com/supertux)</p>
            </td>
            <p className="text-[9px] text-[#828282] px-4">61 points by floriangosse 1 hour ago | hide | 13 comments</p>
        </tr>
        <tr className="bg-[#f6f6ef] flex flex-col">
            <td className="flex flex-row items-top gap-1">
              <span className="">4.</span>
              <img className="pb-2"src="triangle.svg" width={10} height={10}></img>
              <p className="text-[14px]">Pure Programming Language</p>
              <p className="text-[13px] pt-1 text-[#828282]">(agraef.github.io)</p>
            </td>
            <p className="text-[9px] text-[#828282] px-4">56 points by tosh 2 hours ago | hide | 4 comments</p>
        </tr>
        <tr className="bg-[#f6f6ef] flex flex-col">
            <td className="flex flex-row items-top gap-1">
              <span className="">5.</span>
              <img className="pb-2"src="triangle.svg" width={10} height={10}></img>
              <p className="text-[14px]">Testing the F-35C Tailhook</p>
              <p className="text-[13px] pt-1 text-[#828282]">(the-engi-nerd. github.io)</p>
            </td>
            <p className="text-[9px] text-[#828282] px-4">239 points by sklargh 5 hours ago | hide | 101 comments</p>
        </tr>
        <tr className="bg-[#f6f6ef] flex flex-col">
            <td className="flex flex-row items-top gap-1">
              <span className="">6.</span>
              <img className="pb-2"src="triangle.svg" width={10} height={10}></img>
              <p className="text-[14px]">Ant Geopolitics</p>
              <p className="text-[13px] pt-1 text-[#828282]">(aeon.co)</p>
            </td>
            <p className="text-[9px] text-[#828282] px-4">196 points by romaintailhurat 7 hours ago | hide | 61 comments</p>
        </tr>
        <tr className="bg-[#f6f6ef] flex flex-col">
            <td className="flex flex-row items-top gap-1">
              <span className="">7.</span>
              <img className="pb-2"src="triangle.svg" width={10} height={10}></img>
              <p className="text-[14px]">Tesorio (YC S15) Is Hiring a Head of Infrastructure (100% Remote)</p>
              <p className="text-[13px] pt-1 text-[#828282]">(tesorio.com)</p>
            </td>
            <p className="text-[9px] text-[#828282] px-4">21 minutes ago | hide</p>
        </tr>
        <tr className="bg-[#f6f6ef] flex flex-col">
            <td className="flex flex-row items-top gap-1">
              <span className="">8.</span>
              <img className="pb-2"src="triangle.svg" width={10} height={10}></img>
              <p className="text-[14px]">The /unblock API from Browserless: dodging bot detection as a service</p>
              <p className="text-[13px] pt-1 text-[#828282]">(browserless.io)</p>
            </td>
            <p className="text-[9px] text-[#828282] px-4">75 points by keepamovin 3 hours ago | hide | 65 comments</p>
        </tr>
        <tr className="bg-[#f6f6ef] flex flex-col">
            <td className="flex flex-row items-top gap-1">
              <span className="">9.</span>
              <img className="pb-2"src="triangle.svg" width={10} height={10}></img>
              <p className="text-[14px]">I turned my open-source project into a full-time business</p>
              <p className="text-[13px] pt-1 text-[#828282]">(emailengine.app)</p>
            </td>
            <p className="text-[9px] text-[#828282] px-4">472 points by andris9 11 hours ago | hide | 185 comments</p>
        </tr>

        <tr className="bg-[#f6f6ef] flex flex-col">
            <td className="flex flex-row items-top gap-1">
              <span className="">10.</span>
              <img className="pb-2"src="triangle.svg" width={10} height={10}></img>
              <p className="text-[14px]">SpaceX discloses cause of Starship anomalies as it clears an FAA hurdle</p>
              <p className="text-[13px] pt-1 text-[#828282]">(arstechnica.com)</p>
            </td>
            <p className="text-[9px] text-[#828282] px-4">164 points by rbanffy 8 hours ago | hide | 188 comments</p>
        </tr>
        <tr className="bg-[#f6f6ef] flex flex-col">
            <td className="flex flex-row items-top gap-1">
              <span className="">11.</span>
              <img className="pb-2"src="triangle.svg" width={10} height={10}></img>
              <p className="text-[14px]">Blazer: Business intelligence made simple</p>
              <p className="text-[13px] pt-1 text-[#828282]">(github.com/ankane)</p>
            </td>
            <p className="text-[9px] text-[#828282] px-4">124 points by tosh 7 hours ago | hide | 27 comments</p>
        </tr>
        <tr className="bg-[#f6f6ef] flex flex-col">
            <td className="flex flex-row items-top gap-1">
              <span className="">12.</span>
              <img className="pb-2"src="triangle.svg" width={10} height={10}></img>
              <p className="text-[14px]">Apple cancels work on electric car, shifts team to generative AI</p>
              <p className="text-[13px] pt-1 text-[#828282]">(bloomberg.com)</p>
            </td>
            <p className="text-[9px] text-[#828282] px-4">405 points by coloneltcb 2 hours ago | hide | 416 comments</p>
        </tr>
        <tr className="bg-[#f6f6ef] flex flex-col">
            <td className="flex flex-row items-top gap-1">
              <span className="">13.</span>
              <img className="pb-2"src="triangle.svg" width={10} height={10}></img>
              <p className="text-[14px]">Synthetic data generation for tabular data</p>
              <p className="text-[13px] pt-1 text-[#828282]">(github.com/sdv-dev)</p>
            </td>
            <p className="text-[9px] text-[#828282] px-4">20 points by skadamat 2 hours ago | hide | 1 comment</p>
        </tr>
        <tr className="bg-[#f6f6ef] flex flex-col">
            <td className="flex flex-row items-top gap-1">
              <span className="">14.</span>
              <img className="pb-2"src="triangle.svg" width={10} height={10}></img>
              <p className="text-[14px]">Show HN: Mountaineer - Webapps in Python and React</p>
              <p className="text-[13px] pt-1 text-[#828282]">(github.com/piercefreeman)</p>
            </td>
            <p className="text-[9px] text-[#828282] px-4">82 points by icyfox 6 hours ago | hide | 33 comments</p>
        </tr>
        <tr className="bg-[#f6f6ef] flex flex-col">
            <td className="flex flex-row items-top gap-1">
              <span className="">15.</span>
              <img className="pb-2"src="triangle.svg" width={10} height={10}></img>
              <p className="text-[14px]">Show HN: I built an open-source data copy tool called ingestr</p>
              <p className="text-[13px] pt-1 text-[#828282]">(github.com/bruin-data)</p>
            </td>
            <p className="text-[9px] text-[#828282] px-4">78 points by karakanb 6 hours ago | hide | 27 comments</p>
        </tr>
        <tr className="bg-[#f6f6ef] flex flex-col">
            <td className="flex flex-row items-top gap-1">
              <span className="">16.</span>
              <img className="pb-2"src="triangle.svg" width={10} height={10}></img>
              <p className="text-[14px]">Dracula's Biggest Mistake</p>
              <p className="text-[13px] pt-1 text-[#828282]">(ayjay.org)</p>
            </td>
            <p className="text-[9px] text-[#828282] px-4">20 points by chesterfield 2 hours ago | hide | 24 comments</p>
        </tr>
        <tr className="bg-[#f6f6ef] flex flex-col">
            <td className="flex flex-row items-top gap-1">
              <span className="">17.</span>
              <img className="pb-2"src="triangle.svg" width={10} height={10}></img>
              <p className="text-[14px]">Consider the Pawpaw</p>
              <p className="text-[13px] pt-1 text-[#828282]">(beltmag.com)</p>
            </td>
            <p className="text-[9px] text-[#828282] px-4">55 points by PaulHoule 7 hours ago | hide | 48 comments</p>
        </tr>
        <tr className="bg-[#f6f6ef] flex flex-col">
            <td className="flex flex-row items-top gap-1">
              <span className="">18.</span>
              <img className="pb-2"src="triangle.svg" width={10} height={10}></img>
              <p className="text-[14px]">Why time seems to pass faster as we age</p>
              <p className="text-[13px] pt-1 text-[#828282]">(invertedpassion.com)</p>
            </td>
            <p className="text-[9px] text-[#828282] px-4">215 points by paraschopra 11 hours ago | hide | 138 comments</p>
        </tr>
        <tr className="bg-[#f6f6ef] flex flex-col">
            <td className="flex flex-row items-top gap-1">
              <span className="">19.</span>
              <img className="pb-2"src="triangle.svg" width={10} height={10}></img>
              <p className="text-[14px]">The Second Golden Age of Emacs</p>
              <p className="text-[13px] pt-1 text-[#828282]">(batsov.com)</p>
            </td>
            <p className="text-[9px] text-[#828282] px-4">78 points by ossusermivami 9 hours ago | hide | 39 comments</p>
        </tr>
        <tr className="bg-[#f6f6ef] flex flex-col">
            <td className="flex flex-row items-top gap-1">
              <span className="">20.</span>
              <img className="pb-2"src="triangle.svg" width={10} height={10}></img>
              <p className="text-[14px]">Social Media First Amendment Cases</p>
              <p className="text-[13px] pt-1 text-[#828282]">(lawfaremedia.org)</p>
            </td>
            <p className="text-[9px] text-[#828282] px-4">55 points by Mjadams 7 hours ago | hide | 140 comments</p>
        </tr>
      </tbody>
      </table>
   </main>
  );
}
