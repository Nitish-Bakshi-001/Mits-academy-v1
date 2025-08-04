import {
  Search,
  ChevronDown,
  Star,
  Play,
  Clock,
  BarChart3,
  Globe,
  Award,
  User,
  Brain,
  Check,
  Users,
  Target,
  Menu,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

export default function CourseDetailPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Premium Header */}
      <header className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
            {/* Mobile Menu & Logo */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              <Button variant="ghost" size="sm" className="lg:hidden p-2 hover:bg-gray-100 rounded-lg">
                <Menu className="h-5 w-5 text-gray-700" />
              </Button>
              <div className="flex items-center space-x-2">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black tracking-tight">MITS</h1>
                <div className="hidden sm:block w-px h-6 bg-gray-300"></div>
                <span className="hidden sm:block text-sm lg:text-base text-gray-600 font-medium">Education</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg transition-all"
                  >
                    <span className="font-medium">Categories</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 shadow-xl border-0 rounded-xl">
                  <DropdownMenuItem className="py-3 px-4 hover:bg-blue-50">Web Development</DropdownMenuItem>
                  <DropdownMenuItem className="py-3 px-4 hover:bg-blue-50">Data Science</DropdownMenuItem>
                  <DropdownMenuItem className="py-3 px-4 hover:bg-blue-50">AI & Machine Learning</DropdownMenuItem>
                  <DropdownMenuItem className="py-3 px-4 hover:bg-blue-50">Cloud Computing</DropdownMenuItem>
                  <DropdownMenuItem className="py-3 px-4 hover:bg-blue-50">Mobile Development</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Premium Search Bar */}
            <div className="hidden sm:flex flex-1 max-w-lg mx-6 lg:mx-8">
              <div className="relative w-full">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="search"
                  placeholder="Search for courses, instructors, topics..."
                  className="pl-12 pr-4 w-full h-12 lg:h-14 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 bg-gray-50 focus:bg-white transition-all shadow-sm"
                />
              </div>
            </div>

            {/* Right Navigation */}
            <div className="flex items-center space-x-3 sm:space-x-4 lg:space-x-6">
              <a
                href="#"
                className="hidden sm:block text-sm lg:text-base text-gray-700 hover:text-blue-600 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-blue-50"
              >
                For Business
              </a>
              <a
                href="#"
                className="hidden md:block text-sm lg:text-base text-gray-700 hover:text-blue-600 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-blue-50"
              >
                Teach on MITS
              </a>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 lg:px-8 py-2 lg:py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all">
                Sign In
              </Button>
            </div>
          </div>

          {/* Mobile Search Bar */}
          <div className="sm:hidden pb-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="search"
                placeholder="Search courses..."
                className="pl-11 pr-4 w-full h-11 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 bg-gray-50 focus:bg-white transition-all"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Premium Navigation Menu */}
      <nav className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex lg:justify-center space-x-4 sm:space-x-6 lg:space-x-12 py-4 lg:py-5 overflow-x-auto scrollbar-hide">
            <a
              href="#"
              className="text-blue-600 font-semibold border-b-3 border-blue-600 pb-2 whitespace-nowrap text-sm lg:text-base px-2 transition-all"
            >
              All Courses
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors whitespace-nowrap text-sm lg:text-base px-2 py-2 rounded-lg hover:bg-gray-50"
            >
              AI & Machine Learning
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors whitespace-nowrap text-sm lg:text-base px-2 py-2 rounded-lg hover:bg-gray-50"
            >
              Data Science
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors whitespace-nowrap text-sm lg:text-base px-2 py-2 rounded-lg hover:bg-gray-50"
            >
              Web Development
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors whitespace-nowrap text-sm lg:text-base px-2 py-2 rounded-lg hover:bg-gray-50"
            >
              Cloud Computing
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors whitespace-nowrap text-sm lg:text-base px-2 py-2 rounded-lg hover:bg-gray-50"
            >
              Mobile Development
            </a>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className=" border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 lg:py-4">
          <nav className="flex items-center text-sm lg:text-base">
            <a href="#" className="text-blue-600 hover:text-blue-800 text-s font-medium transition-colors">
              Home
            </a>
            <ChevronRight className="h-4 w-4 text-gray-400 mx-2" />
            <a href="#" className="text-blue-600 hover:text-blue-800 text-s font-medium transition-colors">
              Courses
            </a>
            <ChevronRight className="h-4 w-4 text-s text-gray-400 mx-2" />
            <span className="text-gray-900 font-medium">AI & Machine Learning Fundamentals</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-12">
        {/* Hero Section - Premium USA Style */}
        <div className="bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 mb-8 lg:mb-12 shadow-xl border border-blue-100">
          <div className="flex flex-col space-y-6 lg:space-y-0 lg:flex-row lg:items-start lg:space-x-12">
            {/* Course Info */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 mb-6 lg:mb-8">
                <div className="w-20 h-20 lg:w-24 lg:h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center flex-shrink-0 border border-blue-100">
                  <Brain className="h-10 w-10 lg:h-12 lg:w-12 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start space-y-3 sm:space-y-0 sm:space-x-4 mb-4">
                    <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-black leading-tight tracking-tight">
                      AI & Machine Learning Fundamentals
                    </h1>
                    <Badge className="bg-red-500 text-white hover:bg-red-500 text-s text-white px-4 py-2 self-start rounded-full shadow-lg">
                      🔥 Trending
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge className="bg-blue-500 text-white hover:bg-blue-500 rounded-full px-4 py-2 text-s text-white font-medium shadow-md">
                      Artificial Intelligence
                    </Badge>
                    <Badge className="bg-purple-500 text-white hover:bg-purple-500 rounded-full px-4 py-2 text-s text-white font-medium shadow-md">
                      Machine Learning
                    </Badge>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 text-lg sm:text-xl lg:text-2xl leading-relaxed mb-6 lg:mb-8 font-light">
                Master the fundamentals of Artificial Intelligence and Machine Learning. Learn neural networks, deep
                learning, and build intelligent systems that can learn, adapt, and make predictions from data.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 mb-6 lg:mb-8">
                <div className="flex items-center space-x-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                  <User className="h-5 w-5 lg:h-6 lg:w-6 text-blue-500 flex-shrink-0" />
                  <div>
                    <span className="text-sm text-gray-500 block">Instructor</span>
                    <span className="text-base lg:text-lg text-black font-semibold">Mr. Shubham</span>
                  </div>
                </div>
                <div className="flex items-center space-x-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                  <Clock className="h-5 w-5 lg:h-6 lg:w-6 text-green-500 flex-shrink-0" />
                  <div>
                    <span className="text-sm text-gray-500 block">Duration</span>
                    <span className="text-base lg:text-lg text-black font-semibold">6 Months</span>
                  </div>
                </div>
                <div className="flex items-center space-x-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                  <BarChart3 className="h-5 w-5 lg:h-6 lg:w-6 text-orange-500 flex-shrink-0" />
                  <div>
                    <span className="text-sm text-gray-500 block">Level</span>
                    <span className="text-base lg:text-lg text-black font-semibold">Beginner to Advanced</span>
                  </div>
                </div>
                <div className="flex items-center space-x-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                  <Users className="h-5 w-5 lg:h-6 lg:w-6 text-purple-500 flex-shrink-0" />
                  <div>
                    <span className="text-sm text-gray-500 block">Students</span>
                    <span className="text-base lg:text-lg text-black font-semibold">500</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-6 mb-6">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 lg:h-6 lg:w-6 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-base lg:text-lg text-black font-semibold">4.9</span>
                </div>
                <span className="text-sm lg:text-base text-gray-600">(120 student reviews)</span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 flex-1 sm:flex-none">
                  Enroll Now
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid - Premium Layout */}
        <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-12 lg:gap-12 mb-12 lg:mb-16">
          {/* Main Content */}
          <div className="lg:col-span-8">
            {/* Video Section */}
            <div className="bg-white rounded-2xl lg:rounded-3xl shadow-xl p-6 sm:p-8 mb-8 border border-gray-100">
              <h2 className="text-2xl lg:text-3xl font-bold text-black mb-6 lg:mb-8">Course Preview</h2>
              <div className="relative aspect-video bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-orange-600 bg-opacity-95 rounded-full p-6 lg:p-8 hover:bg-opacity-100 transition-all cursor-pointer shadow-2xl transform hover:scale-110">
                    <Play className="h-8 w-8 lg:h-12 lg:w-12 text-white fill-white" />
                  </div>
                </div>
                <img
                  src="/placeholder.svg?height=450&width=800"
                  alt="AI & Machine Learning course preview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-4 py-2 rounded-lg text-sm font-medium">
                  Preview: Introduction to Neural Networks
                </div>
              </div>
            </div>

            {/* Course Description */}
            <div className="bg-white rounded-2xl lg:rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10 border border-gray-100">
              <h2 className="text-2xl lg:text-3xl font-bold text-black mb-6 lg:mb-8">About This Course</h2>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg lg:text-xl mb-8 lg:mb-10 font-light">
                Dive deep into the world of Artificial Intelligence and Machine Learning with this comprehensive course.
                You'll master fundamental concepts, build neural networks from scratch, implement deep learning
                algorithms, and create intelligent systems that can solve real-world problems. Perfect for aspiring AI
                engineers, data scientists, and technology professionals.
              </p>

              <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-10">
                {/* What You'll Learn */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 lg:p-8 border border-green-100 shadow-lg">
                  <h3 className="text-xl lg:text-2xl font-bold text-black mb-4 lg:mb-6 flex items-center">
                    <Check className="h-6 w-6 lg:h-7 lg:w-7 text-green-600 mr-3" />
                    What You'll Master
                  </h3>
                  <ul className="space-y-3 lg:space-y-4">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-sm lg:text-base text-gray-700 font-medium">
                        Neural Networks and Deep Learning fundamentals
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-sm lg:text-base text-gray-700 font-medium">
                        Machine Learning algorithms and implementation
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-sm lg:text-base text-gray-700 font-medium">
                        Computer Vision and Natural Language Processing
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-sm lg:text-base text-gray-700 font-medium">
                        TensorFlow, PyTorch, and Python for AI development
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-sm lg:text-base text-gray-700 font-medium">
                        Real-world AI project development and deployment
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Requirements & Target Audience */}
                <div className="space-y-6 lg:space-y-8">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 lg:p-8 border border-blue-100 shadow-lg">
                    <h3 className="text-xl lg:text-2xl font-bold text-black mb-4 lg:mb-6 flex items-center">
                      <Target className="h-6 w-6 lg:h-7 lg:w-7 text-blue-600 mr-3" />
                      Prerequisites
                    </h3>
                    <ul className="space-y-2 lg:space-y-3">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-3 font-bold text-lg">•</span>
                        <span className="text-sm lg:text-base text-gray-700 font-medium">
                          Python programming experience
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-3 font-bold text-lg">•</span>
                        <span className="text-sm lg:text-base text-gray-700 font-medium">
                          Basic mathematics and statistics
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-3 font-bold text-lg">•</span>
                        <span className="text-sm lg:text-base text-gray-700 font-medium">
                          Familiarity with data structures
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 lg:p-8 border border-orange-100 shadow-lg">
                    <h3 className="text-xl lg:text-2xl font-bold text-black mb-4 lg:mb-6 flex items-center">
                      <Users className="h-6 w-6 lg:h-7 lg:w-7 text-orange-600 mr-3" />
                      Perfect For
                    </h3>
                    <ul className="space-y-2 lg:space-y-3">
                      <li className="flex items-start">
                        <span className="text-orange-600 mr-3 font-bold text-lg">•</span>
                        <span className="text-sm lg:text-base text-gray-700 font-medium">
                          Software engineers & developers
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-600 mr-3 font-bold text-lg">•</span>
                        <span className="text-sm lg:text-base text-gray-700 font-medium">
                          Data scientists & analysts
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-600 mr-3 font-bold text-lg">•</span>
                        <span className="text-sm lg:text-base text-gray-700 font-medium">
                          AI/ML enthusiasts & researchers
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-10 lg:mt-12 text-center">
                <Button
                  variant="outline"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 lg:px-12 py-3 lg:py-4 rounded-xl font-semibold bg-white shadow-lg hover:shadow-xl transition-all w-full sm:w-auto text-lg"
                >
                  Explore More AI Courses
                </Button>
              </div>
            </div>
          </div>

          {/* Sidebar - Course Details */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-2xl lg:rounded-3xl shadow-xl p-6 sm:p-8 lg:sticky lg:top-8 border border-gray-100">
              <h2 className="text-xl lg:text-2xl font-bold text-black mb-6 lg:mb-8">Course Information</h2>

              <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-6 mb-8">
                <div className="text-center p-4 lg:p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl lg:rounded-2xl border border-blue-100 shadow-md">
                  <Clock className="h-8 w-8 lg:h-10 lg:w-10 text-blue-600 mx-auto mb-3" />
                  <div className="font-bold text-black text-sm lg:text-base">Duration</div>
                  <div className="text-gray-600 text-xs lg:text-sm font-medium">16 weeks</div>
                </div>

                <div className="text-center p-4 lg:p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl lg:rounded-2xl border border-green-100 shadow-md">
                  <BarChart3 className="h-8 w-8 lg:h-10 lg:w-10 text-green-600 mx-auto mb-3" />
                  <div className="font-bold text-black text-sm lg:text-base">Level</div>
                  <div className="text-gray-600 text-xs lg:text-sm font-medium">Intermediate</div>
                </div>

                <div className="text-center p-4 lg:p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl lg:rounded-2xl border border-purple-100 shadow-md">
                  <Globe className="h-8 w-8 lg:h-10 lg:w-10 text-purple-600 mx-auto mb-3" />
                  <div className="font-bold text-black text-sm lg:text-base">Language</div>
                  <div className="text-gray-600 text-xs lg:text-sm font-medium">English</div>
                </div>

                <div className="text-center p-4 lg:p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl lg:rounded-2xl border border-yellow-100 shadow-md">
                  <Award className="h-8 w-8 lg:h-10 lg:w-10 text-yellow-600 mx-auto mb-3" />
                  <div className="font-bold text-black text-sm lg:text-base">Certificate</div>
                  <div className="text-gray-600 text-xs lg:text-sm font-medium">Included</div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl lg:rounded-2xl p-4 lg:p-6 mb-8 border border-gray-100 shadow-md">
                <h3 className="font-bold text-black mb-4 text-base lg:text-lg">Premium Features</h3>
                <ul className="space-y-2 lg:space-y-3 text-sm lg:text-base text-gray-700">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                    <span>Lifetime access to all content</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                    <span>Mobile & desktop learning</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                    <span>Hands-on coding projects</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                    <span>Industry-recognized certificate</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                    <span>30-day money-back guarantee</span>
                  </li>
                </ul>
              </div>

              {/* Enroll Button */}
              <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white px-6 py-4 text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 mb-4">
                Enroll Now
              </Button>

              <p className="text-center text-sm text-gray-500">Join 12,847+ students already enrolled</p>
            </div>
          </div>
        </div>
      </main>

      {/* Premium Footer - USA Style */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12 lg:mb-16">
            {/* About Us */}
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6">MITS</h3>
              <p className="text-gray-300 leading-relaxed text-sm lg:text-base mb-6 lg:mb-8 font-light">
                America's leading online education platform, empowering millions of learners worldwide with cutting-edge
                technology courses and industry-recognized certifications.
              </p>
              <div className="text-sm text-gray-400">
                <p>🏆 Trusted by 2M+ students</p>
                <p>🌟 4.8/5 average rating</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg lg:text-xl font-semibold mb-4 lg:mb-6">Learn</h3>
              <ul className="space-y-3 lg:space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base font-medium"
                  >
                    All Courses
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base font-medium"
                  >
                    AI & Machine Learning
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base font-medium"
                  >
                    Data Science
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base font-medium"
                  >
                    Web Development
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base font-medium"
                  >
                    Cloud Computing
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg lg:text-xl font-semibold mb-4 lg:mb-6">Company</h3>
              <ul className="space-y-3 lg:space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base font-medium"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base font-medium"
                  >
                    For Business
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base font-medium"
                  >
                    Teach on MITS
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base font-medium"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base font-medium"
                  >
                    Press
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg lg:text-xl font-semibold mb-4 lg:mb-6">Support</h3>
              <div className="space-y-3 lg:space-y-4 text-gray-300 text-sm lg:text-base">
                <p className="font-medium">📍 San Francisco, CA</p>
                <p className="font-medium">📞 1-800-MITS-EDU</p>
                <p className="font-medium">✉️ support@mits.edu</p>
                <p className="font-medium">💬 24/7 Live Chat</p>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800 pt-8 lg:pt-12 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm lg:text-base text-center sm:text-left font-medium">
              © 2024 MITS Education Inc. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end gap-6 lg:gap-8">
              <a href="#" className="text-gray-400 hover:text-white text-sm lg:text-base transition-colors font-medium">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm lg:text-base transition-colors font-medium">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm lg:text-base transition-colors font-medium">
                Cookie Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm lg:text-base transition-colors font-medium">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
