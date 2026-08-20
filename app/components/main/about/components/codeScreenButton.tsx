export function CodeScreenButton() {
     const buttons = ["bg-[#ff5f56]", "bg-[#ffbd2e]", "bg-[#27c93f]"];

        return (
            <div className="flex gap-3">
                {
                    buttons.map((color, index) => (
                        <button key={index} 
                        className={`${color} rounded-xl p-[8px]`}
                        ></button>
                    ))
                }
            </div>
        );
}