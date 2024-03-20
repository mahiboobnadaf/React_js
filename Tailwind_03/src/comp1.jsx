function Compo(){
    return (
        <div><figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
            <img className="w-24 h-24 rounded-full" src="https://images.pexels.com/photos/9217804/pexels-photo-9217804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width="384" height="512" />
            <div className="pt-6 space-y-4">
              <blockquote>
                <p className="text-lg">
                  “Tailwind CSS is the only framework that I've seen scale
                  on large teams. It's easy to customize, adapts to any design,
                  and the build size is tiny.”
                </p>
              </blockquote>
              <figcaption>
                <div>
                  Sarah Dayan
                </div>
                <div>
                  Staff Engineer, Algolia
                </div>
              </figcaption>
            </div>
          </figure>
      </div>
    )
}

export default Compo