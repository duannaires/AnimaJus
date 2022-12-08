interface AboutScreenProps {
  pageTitle: string;
}

export function AboutScreen({ pageTitle }: AboutScreenProps) {
  return (
    <div className="container">
      <div className='d-flex flex-column'>
        <h1 className="mt-4 aj-text-red">{ pageTitle }</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas in turpis at scelerisque. Curabitur tellus velit, pharetra id mollis vitae, pharetra laoreet justo. Vivamus nec risus dapibus, suscipit ipsum sit amet, accumsan dolor. Suspendisse vestibulum ante a massa tempus mattis id non nisi. In quis scelerisque nisi, ut consectetur magna. Nullam nunc justo, mattis ac nibh ac, rutrum mollis diam. Ut sodales, turpis at accumsan accumsan, eros metus dapibus turpis, scelerisque eleifend velit risus non lacus. In molestie vel sapien nec interdum. Vivamus ac feugiat arcu. Fusce eu leo sed metus euismod maximus eu ac lectus. Maecenas eu mollis nisl.</p>

        <p>Fusce gravida nisi lacus, quis eleifend est fringilla eu. Ut efficitur quam lectus, non consequat dolor consectetur ut. Mauris sodales tortor magna, sit amet sollicitudin purus faucibus vel. Curabitur ante libero, pellentesque eget hendrerit at, vulputate et lorem. Nam nec blandit lectus, eu pretium ex. In ligula odio, dignissim a suscipit efficitur, dictum ut leo. Mauris vel magna vel felis laoreet scelerisque. Nam sed faucibus nibh, vitae auctor urna. Suspendisse mollis varius iaculis. Nullam ultrices volutpat lorem, sit amet cursus lectus aliquet nec. Ut non tempus tortor, a efficitur odio. Fusce facilisis metus sit amet massa laoreet, sed imperdiet lacus accumsan. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed feugiat volutpat luctus.</p>

        <p>Fusce consectetur congue quam vitae tincidunt. In ornare mollis lorem et rhoncus. Aenean dignissim quis justo sed sollicitudin. Sed interdum, diam sed sollicitudin efficitur, odio nulla rutrum dolor, id mattis diam mi at elit. Cras bibendum, velit placerat consequat laoreet, ex urna suscipit diam, quis dictum libero arcu ac mauris. In mauris libero, tristique vitae arcu quis, faucibus tempor dui. Sed ac ante in magna scelerisque pulvinar id eget eros. Duis lobortis metus sit amet nibh accumsan sagittis. Etiam accumsan ultricies arcu. Duis blandit sem lectus, non dictum diam rhoncus a. Mauris hendrerit tortor magna, quis molestie urna aliquet aliquet.</p>

        <p>Suspendisse vel elit at nulla aliquam imperdiet. Praesent condimentum, elit vitae egestas scelerisque, eros lacus porta neque, id lacinia nunc dolor eget risus. In eu risus consequat, volutpat turpis ut, semper lacus. Curabitur vulputate convallis erat ac dapibus. Nulla non ornare ipsum. Duis euismod venenatis quam, ac viverra ex cursus in. Nunc tristique felis placerat dolor suscipit imperdiet. Vivamus a maximus ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lectus mauris, cursus quis interdum et, finibus ac velit. Sed placerat malesuada est, nec consectetur erat. In convallis libero ut ligula placerat consequat. Phasellus ut turpis dictum justo molestie venenatis. Donec sit amet ex imperdiet, placerat lorem a, mattis sapien. Nulla iaculis condimentum mauris, porttitor malesuada neque.</p>

        <p>Vestibulum porta augue eu quam facilisis vehicula. Nunc at velit in quam suscipit tincidunt. Sed mollis, ipsum a malesuada fermentum, metus purus venenatis velit, nec cursus lacus mi lacinia massa. Sed magna velit, gravida nec justo semper, sodales lobortis nisl. Praesent quis dictum erat. In sollicitudin sit amet ipsum non placerat. Nullam malesuada aliquet neque eu iaculis. Fusce sit amet felis nec felis vulputate interdum non at ipsum. Nunc tortor eros, scelerisque quis augue quis, interdum volutpat nibh. Vestibulum rhoncus ex at tellus eleifend dignissim. In lorem lectus, pretium id lorem a, tempor mattis lacus.</p>
      </div>
    </div>
  )
}